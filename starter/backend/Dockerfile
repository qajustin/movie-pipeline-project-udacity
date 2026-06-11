FROM public.ecr.aws/docker/library/python:3.10-alpine

ENV FLASK_RUN_HOST=0.0.0.0
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN adduser -u 1000 -D app && \
    apk update && \
    apk add --no-cache \
      pcre \
      pcre-dev \
      build-base \
      gcc \
      linux-headers \
      openssl \
      openssl-dev \
      libffi-dev \
      musl-dev \
      postgresql-dev && \
    pip install --no-cache-dir pipenv

COPY Pipfile Pipfile.lock /app/

RUN pipenv install --system --deploy

COPY . /app

CMD ["uwsgi", "--http", ":5000", "--master", "--enable-threads", "--wsgi-file", "app.py", "--callable", "app"]
