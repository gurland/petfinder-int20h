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
    try:
        response = requests.post(tg_users_endpoint, json={
            "telegram_id": user_id,
            "random_id": random_id
        }, verify=False)

        response_json = response.json()

        bot.reply_to(message, f"{response_json.get('message')}")
    except Exception as e:
        bot.reply_to(message, f"Unknown error occured: {str(e)}")


if __name__ == '__main__':
    while True:
        try:
            json_string = r.brpop('tgbot_queue')[1].decode()
            cmd, *queue_args = json_string.split(":")
            content = ":".join(queue_args)

            if cmd == "update":
                update = types.Update.de_json(content)
                bot.process_new_updates([update])
            elif cmd == "notify":
                notification_info = loads(content)
                bot.send_message(notification_info.get("telegram_id"),
f"""<b>Знайдено можливого домашнього улюбленця по оголошенню: </b>
{notification_info.get("lost_url")}\n\n
<b>Посилання на знахідку:</b> {notification_info.get("url")}""", parse_mode="HTML")

        except Exception as e:
            error(e)
            sleep(2)
