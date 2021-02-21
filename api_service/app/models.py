import uuid
import logging
from urllib.parse import urljoin
from json import dumps
from datetime import datetime

#from peewee import SqliteDatabase, PostgresqlDatabase, CharField, IntegerField, ForeignKeyField, BooleanField, FloatField, TextField, DateTimeField
from playhouse.postgres_ext import *
from playhouse.signals import Model, post_save
import bcrypt
from redis import StrictRedis

from settings import *
from utils import get_distance_between_geo_points,gen_random_uuid_string
from exceptions import UserAlreadyExistsError, UserDoesNotExist, WrongPassword

# database = SqliteDatabase("db.sqlite3")
database = PostgresqlExtDatabase(DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST, port=DB_PORT, autorollback=True)
r = StrictRedis(REDIS_URL)


class BaseModel(Model):
    class Meta:
        database = database


class User(BaseModel):
    email = CharField(unique=True)
    username = CharField()
    pw_hash = CharField()

    phone = CharField(null=True)
    longitude = FloatField(null=True)
    latitude = FloatField(null=True)
    radius = IntegerField(default=1000)

    is_ready_for_seeking = BooleanField(default=False)

    def to_dict(self):
        notification, status = Notification.get_or_create(user=self)
        return {
            "email": self.email,
            "username": self.username,
            "phone": self.phone,
            "is_tg_connected": bool(notification.telegram_id),
            "tg_url": f"https://t.me/{TG_BOT_NAME}?start={notification.random_id}",
            "longitude": self.longitude,
            "latitude": self.latitude,
            "radius": self.radius,
        }

    def notify(self, found_pet_ad, lost_pet_ad):
        notification, status = Notification.get_or_create(user=self)
        if notification.telegram_id:
            json_string = dumps({
                "telegram_id": notification.telegram_id,
                "url": urljoin(WEBHOOK_HOST, f"/ads/{found_pet_ad.id}"),
                "lost_url": urljoin(WEBHOOK_HOST, f"/ads/{lost_pet_ad.id}"),
                "longitude": found_pet_ad.longitude,
                "latitude": found_pet_ad.latitude
            })
            r.lpush('tgbot_queue', f"notify:{json_string}")

    @classmethod
    def register(cls, email, password):
        try:
            User.get(email=email)
            raise UserAlreadyExistsError(f"User with email {email} already exists")
        except User.DoesNotExist:
            user = cls.create(email=email, pw_hash=bcrypt.hashpw(password.encode(), bcrypt.gensalt()), username=email)
            return user

    @classmethod
    def login(cls, email, password):
        try:
            user = cls.get(email=email)
        except User.DoesNotExist:
            raise UserDoesNotExist(f"User with email {email} does not exist")

        if bcrypt.checkpw(password.encode(), user.pw_hash.encode()):
            return user
        else:
            raise WrongPassword



class Notification(BaseModel):
    user = ForeignKeyField(User, backref="notifications")
    random_id = CharField(default=gen_random_uuid_string)
    email = CharField(null=True)
    viber_id = CharField(null=True)
    telegram_id = CharField(null=True)


class AD(BaseModel):
    user = ForeignKeyField(User, backref="ads")
    species = CharField()
    longitude = FloatField()
    latitude = FloatField()
    is_lost = BooleanField()
    radius = IntegerField(null=True)
    photo = CharField(null=True)
    breed = CharField(null=True)
    color = CharField(null=True)
    description = TextField(null=True)
    date = DateTimeField(default=datetime.utcnow)
    search_content = TSVectorField()

    @classmethod
    def search_ads(cls, search_term):
        return cls.select().where(
            cls.search_content.match(search_term.replace(" ", " & "))
        )

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user.id,
            "user_email": self.user.email,
            "user_phone": self.user.phone,
            "user_username": self.user.username,
            "species": self.species,
            "longitude": self.longitude,
            "latitude": self.latitude,
            "is_lost": self.is_lost,
            "radius": self.radius,
            "photo": self.photo,
            "breed": self.breed,
            "color": self.color,
            "description": self.description,
            "date": self.date.isoformat(),
        }


class Chat(BaseModel):
    ad = ForeignKeyField(AD, backref="chats")
    is_active = BooleanField(default=True)
    date = DateTimeField(default=datetime.utcnow)


class ChatSubscription(BaseModel):
    chat = ForeignKeyField(Chat, backref="chat_subscriptions")
    user = ForeignKeyField(User, backref="chat_subscriptions")


class Message(BaseModel):
    chat = ForeignKeyField(Chat, backref="messages")
    author = ForeignKeyField(User, backref="messages")
    text = TextField()
    date = DateTimeField(default=datetime.utcnow)


@post_save(sender=User)
def create_notification(model_class, instance, created):
    if created:
        Notification.create(user=instance, email=instance.email)


@post_save(sender=AD)
def create_notification(model_class, ad, created):
    if created and ad.is_lost:
        ready_users = User.select().where(User.is_ready_for_seeking == True)
        chat = Chat.create(ad=ad)

        for ready_user in ready_users:
            distance = get_distance_between_geo_points(
                float(ad.longitude), float(ad.latitude), float(ready_user.longitude), float(ready_user.latitude)
            )
            if ready_user.radius > distance:
                ChatSubscription.create(chat=chat, user=ready_user)

        owner = ad.user
        ChatSubscription.create(chat=chat, user=owner)

    elif created and not ad.is_lost:
        lost_pets = AD.select().where(AD.is_lost == True)
        for lost_pet in lost_pets:
            logging.error(f"{lost_pet.longitude}, {lost_pet.latitude}, {ad.longitude}, {ad.latitude}")
            distance = get_distance_between_geo_points(
                float(lost_pet.longitude), float(lost_pet.latitude), float(ad.longitude), float(ad.latitude)
            )

            if distance < 5000 and ad.species.lower() == lost_pet.species.lower():
                lost_pet.user.notify(ad, lost_pet)


database.create_tables([User, Notification, AD, Chat, ChatSubscription, Message])
