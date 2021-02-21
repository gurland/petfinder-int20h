FROM python

COPY . .
RUN pip install -r requirements.txt


CMD ["uwsgi", "--ini", "uwsgi.ini"]

#WORKDIR app
#CMD ["python", "./main.py"]