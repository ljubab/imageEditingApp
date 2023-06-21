FROM python

WORKDIR /app

COPY ./requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY ./src ./src

EXPOSE 5000

CMD ["flask", "--app", "src/main", "run", "--host=0.0.0.0", "--reload"]