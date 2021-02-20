FROM python

COPY . .
RUN pip install -r requirements.txt

CMD ["uwsgi", "--ini", "uwsgi.ini"]