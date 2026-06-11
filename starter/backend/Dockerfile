FROM public.ecr.aws/docker/library/python:3.10-alpine

ENV FLASK_RUN_HOST=0.0.0.0
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV CFLAGS="-Wno-error=incompatible-pointer-types"

WORKDIR /app

RUN apk add --no-cache \
    build-base \
    gcc \
    linux-headers \
    musl-dev \
    python3-dev \
    pcre \
    pcre-dev \
    openssl-dev \
    libffi-dev

RUN pip install --no-cache-dir --upgrade pip pipenv

COPY Pipfile Pipfile.lock ./

RUN pipenv install --system --deploy --verbose

COPY . .

EXPOSE 5000
CMD ["uwsgi", "--http", ":5000", "--master", "--enable-threads", "--wsgi-file", "app.py", "--callable", "app"]

