FROM public.ecr.aws/docker/library/python:3.10-alpine

ENV FLASK_RUN_HOST=0.0.0.0

WORKDIR /app

RUN adduser -u 1000 -D app && \
    apk add --no-cache \
      pcre \
      pcre-dev \
      build-base \
      gcc \
      linux-headers \
      openssl \
      libffi-dev \
      python3-dev \
      musl-dev && \
    pip install --no-cache-dir --upgrade pip pipenv

COPY Pipfile Pipfile.lock ./

RUN pipenv install --system --deploy

COPY . .

EXPOSE 5000

CMD ["uwsgi", "--http", ":5000", "--master", "--enable-threads", "-s", "/var/www/app/app.sock", "--manage-script-name", "--mount", "/=app:app"]
