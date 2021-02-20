import datetime
from functools import wraps

from flask import Flask, request, jsonify
import jwt

from models import User, Notification, AD
from exceptions import UserAlreadyExistsError, AuthError

app = Flask(__name__)

app.config['SECRET_KEY'] = 'VerYSecRETKeydonotdecodethisxd'


def generate_token(user_id):
    payload = {
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=14),
        'iat': datetime.datetime.utcnow(),
        'sub': user_id
    }
    return jwt.encode(
        payload,
        app.config.get('SECRET_KEY'),
        algorithm='HS256'
    )


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            token = request.headers.get('Authorization')
            if token:
                token_parts = token.split(" ")
                if len(token_parts) > 1:
                    token = token_parts[1]
            else:
                token = ''

        if not token:
            return jsonify({'message': 'Token is missing'}), 401

        try:
            payload = jwt.decode(token, app.config['SECRET_KEY'], algorithms='HS256')
            user_id = payload.get("sub", -1)

            current_user = User.get(user_id)
        except Exception as e:
            return jsonify({
                'message': f'Token is invalid. Error: {str(e)}'
            }), 401

        return f(current_user, *args, **kwargs)

    return decorated


@app.route('/')
def hello():
    return "Hello World!"


@app.route('/api/')
def hello_api():
    return "Hello API!"


@app.route("/api/v1/tg_users", methods=["POST"])
def bind_tg_user():
    telegram_user_data = request.get_json()
    if "telegram_id" in telegram_user_data or "random_id" in telegram_user_data:
        try:
            notification = Notification.get(random_id=telegram_user_data.get("random_id"))
            if notification.telegram_id:
                if notification.telegram_id == telegram_user_data.get("telegram_id"):
                    return jsonify({"message": "Ваш акаунт вже прив'язаний."}), 409
                else:
                    notification.telegram_id = telegram_user_data.get("telegram_id")
                    notification.save()
                    return jsonify({"message": "Прив'язку акаунту змінено."}), 200

            notification.telegram_id = telegram_user_data.get("telegram_id")
            notification.save()

            return jsonify({"message": "Успішно прив'язано користувача."})

        except Notification.DoesNotExist:
            return jsonify({"message": "Посилання на бота сформоване неправильно."}), 404

    return jsonify({"message": "Неправильно сформовані дані"}), 404


@app.route('/api/v1/auth/register', methods=["POST"])
def register_user():
    register_data = request.get_json()
    user_email = register_data.get("email")
    user_password = register_data.get("email")

    if user_email and user_password:
        try:
            user = User.register(user_email, user_password)
            return jsonify({"access_token": generate_token(user.id)})
        except UserAlreadyExistsError as e:
            return jsonify({"message": str(e)}), 409

    return jsonify({"message": "Malformed request"}), 400


@app.route('/api/v1/auth/login', methods=["POST"])
def login_user():
    register_data = request.get_json()
    user_email = register_data.get("email")
    user_password = register_data.get("email")

    if user_email and user_password:
        try:
            user = User.login(user_email, user_password)
            return jsonify({"access_token": generate_token(user.id)})
        except AuthError as e:
            return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Malformed request"}), 400


@app.route("/api/v1/auth/test")
@token_required
def test_auth(current_user):
    return jsonify({"id": current_user.id, "email": current_user.email})


@app.route("/api/v1/ads", methods=["POST"])
@token_required
def ads(current_user):
    query = AD.select()

    return jsonify({"id": current_user.id, "email": current_user.email})


if __name__ == '__main__':
    app.run(port=3000)
