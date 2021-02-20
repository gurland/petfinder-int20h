FROM python

COPY . .
RUN pip install -r requirements.txt
WORKDIR app

#CMD ["uwsgi", "--ini", "uwsgi.ini"]
CMD ["python", "./main.py"]