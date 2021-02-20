FROM python:3

WORKDIR /webhook/
COPY . /webhook/

RUN pip install --no-cache-dir -r requirements.txt

CMD [ "python", "./main.py" ]
