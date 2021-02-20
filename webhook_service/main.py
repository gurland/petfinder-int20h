from time import sleep
from json import dumps

from redis import StrictRedis
from telebot import TeleBot, apihelper, types
from viberbot import Api
from viberbot.api.bot_configuration import BotConfiguration
from flask import Flask, request, abort, jsonify

from settings import *

r = StrictRedis(REDIS_URL)
app = Flask(__name__)

tgbot = TeleBot(TG_BOT_TOKEN, skip_pending=True, threaded=False)
bouncerbot = TeleBot(VIBER_BOT_TOKEN, skip_pending=True, threaded=False)


# TicketBot webhook settings
@app.route(f"/webhook/{TG_BOT_TOKEN}", methods=['POST'])
def ticketbot_webhook():
    if request.headers.get('content-type') == 'application/json':
        json_string = request.get_data().decode('utf-8')
        r.lpush('tgbot_queue', json_string)
        return ''
    else:
        abort(403)


@app.route(f"/webhook/{TG_BOT_TOKEN}/set", methods=['GET'])
def ticketbot_set_webhook():
    response = tgbot.set_webhook(f"{WEBHOOK_HOST}/webhook/{TG_BOT_TOKEN}")
    return str(response)


@app.route(f"/webhook/{TG_BOT_TOKEN}/delete", methods=['GET'])
def ticketbot_delete_webhook():
    response = tgbot.delete_webhook()
    return str(response)


@app.route(f"/webhook/{TG_BOT_TOKEN}/info", methods=['GET'])
def ticketbot_get_webhook_info():
    return jsonify(str(tgbot.get_webhook_info()))


if __name__ == '__main__':
        app.run(host='0.0.0.0', port=7777)

