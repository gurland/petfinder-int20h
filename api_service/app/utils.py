from base64 import b64decode
from settings import MEDIA_PATH
from os.path import join
from uuid import uuid4
import math

EARTH_RADIUS = 6378.137


def store_b64_image_to_disk(b64string):
    image_contents = b64decode(b64string)
    filename = f"{uuid4()}.jpg"
    with open(join(MEDIA_PATH, filename), 'wb') as img_file:
        img_file.write(image_contents)

    return filename


def get_distance_between_geo_points(lat1, lon1, lat2, lon2):
    d_lat = lat2 * math.pi / 180 - lat1 * math.pi / 180
    d_lon = lon2 * math.pi / 180 - lon1 * math.pi / 180

    a = math.sin(d_lat / 2) * math.sin(d_lat / 2) +\
        math.cos(lat1 * math.pi / 180) * math.cos(lat2 * math.pi / 180) *\
        math.sin(d_lon / 2) * math.sin(d_lon / 2)

    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))

    d = EARTH_RADIUS * c
    return d * 1000
