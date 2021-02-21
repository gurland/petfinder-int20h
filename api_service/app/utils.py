from base64 import b64decode
from settings import MEDIA_PATH
from os.path import join
from uuid import uuid4


def store_b64_image_to_disk(b64string):
    image_contents = b64decode(b64string)
    filename = join(MEDIA_PATH, f"{uuid4().jpg}")
    with open(filename, 'wb') as img_file:
        img_file.write(image_contents)

    return filename