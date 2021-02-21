import os

DB_NAME = os.getenv("DB_NAME", "postgres")
DB_USER = os.getenv("DB_USER", "postgres")
DB_PASS = os.getenv("DB_PASS", "portwontbeopened")
DB_HOST = os.getenv("DB_HOST", "localhost")
DB_PORT = os.getenv("DB_PORT", "5432")

MEDIA_PATH = os.getenv("MEDIA_PATH", "/media/photos")
REDIS_URL = os.getenv("REDIS_URL", "redis")
WEBHOOK_HOST = os.getenv("WEBHOOK_HOST", "localhost")
TG_BOT_NAME = os.getenv("TG_BOT_NAME")
