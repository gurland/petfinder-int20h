from urllib.parse import urljoin
from time import sleep
from logging import error
from json import loads

import requests
from redis import StrictRedis
from telebot import types, TeleBot
from settings import *
from utils import extract_random_id

bot = TeleBot(TG_BOT_TOKEN, skip_pending=True, threaded=False)
r = StrictRedis(REDIS_URL)


@bot.message_handler(commands=['start'])
def handle_new_user(message: types.Message):
    user_id = message.from_user.id
    random_id = extract_random_id(message.text)
    tg_users_endpoint = urljoin(API_URL, "api/v1/tg_users")
    response = requests.post(tg_users_endpoint, data={
        "telegram_id": user_id,
        "random_id": random_id
    }).json()

    bot.reply_to(message, f"{response.get('message')}")


if __name__ == '__main__':
    while True:
        try:
            raw = r.brpop('tgbot_queue')
            error(raw)
            json_string = raw[1].decode()
            update = types.Update.de_json(json_string)
            bot.process_new_updates([update])

        except Exception as e:
            error(e)
            sleep(2)