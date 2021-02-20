from peewee import SqliteDatabase, PostgresqlDatabase, CharField, ForeignKeyField, BooleanField, FloatField
from playhouse.signals import Model, post_save
import bcrypt

from settings import *
from exceptions import UserAlreadyExistsError, UserDoesNotExist, WrongPassword

# database = SqliteDatabase("db.sqlite3")
database = PostgresqlDatabase(DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST, port=DB_PORT, autorollback=True)


class BaseModel(Model):
    class Meta:
        database = database


class User(BaseModel):
    email = CharField(unique=True)
    pw_hash = CharField()

    longitude = FloatField(null=True)
    latitude = FloatField(null=True)
    is_ready_for_seeking = BooleanField(default=False)

    username = CharField(null=True)

    @classmethod
    def register(cls, email, password):
        user, created_status = cls.get_or_create(email=email, pw_hash=bcrypt.hashpw(password, bcrypt.gensalt()))

        if created_status:
            return user
        else:
            raise UserAlreadyExistsError(f"User with email {email} already exists")

    @classmethod
    def login(cls, email, password):
        try:
            user = cls.get(email=email)
        except User.DoesNotExist:
            raise UserDoesNotExist(f"User with email {email} does not exist")

        if bcrypt.checkpw(password, user.pw_hash):
            return user
        else:
            raise WrongPassword


class ViberNotification(BaseModel):
    user = ForeignKeyField(User, backref="viber_notifications")
    viber_id = CharField()
    is_active = BooleanField(default=True)


class TelegramNotification(BaseModel):
    user = ForeignKeyField(User, backref="telegram_notifications")
    telegram_id = CharField()
    is_active = BooleanField(default=True)


@post_save(sender=User)
def on_save_handler(model_class, instance, created):
    if not instance.username:
        instance.username = instance.email
    instance.save()

#database.create_tables([BuckwheatProduct])
