import datetime
from functools import wraps

from flask import Flask, request, jsonify
import jwt

from models import User
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
                token = token.split(" ")[1]
            else:
                token = ''

        if not token:
            return jsonify({'message': 'Token is missing'}), 401

        try:
            payload = jwt.decode(token, app.config['SECRET_KEY'])
            user_id = payload.get("sub", -1)

            current_user = User.get(user_id)
        except:
            return jsonify({
                'message': 'Token is invalid'
            }), 401

        return f(current_user, *args, **kwargs)

    return decorated


@app.route('/')
def hello():
    return "Hello World!"

@app.route('/api/')
def hello_api():
    return "Hello API!"


@app.route("/api/v1/auth/test")
@token_required
def test_auth(current_user):
    return jsonify({"id": current_user.id, "email": current_user.email})


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
            return jsonify({"message": e}), 409

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
            return jsonify({"message": e}), 400

    return jsonify({"message": "Malformed request"}), 400


if __name__ == '__main__':
    app.run(port=8080)
