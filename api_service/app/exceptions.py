class ApiError(Exception):
    pass


class AuthError(ApiError):
    pass


class UserAlreadyExistsError(AuthError):
    pass


class UserDoesNotExist(AuthError):
    pass


class WrongPassword(AuthError):
    pass
