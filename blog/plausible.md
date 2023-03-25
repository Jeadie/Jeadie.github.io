---
layout: page
title: In Praise of Idleness
permalink: /blog/plausible
---

This page has analytics (if you snoop, you'll see it sending traffic to `analytics.jeadie.xyz`). I decided against the default Google Analytics, which leads to a string of alternative Saas, or self-hosting. Plausible seemed ideal (and perhaps [better](https://plausible.io/vs-google-analytics) than Google). For a site that gets no traffic (until you), I didn't want to pay $9/month. I went for self-hosting. In sum: I self-host Plausible on a single EC2 instance using a single file of work. It was easy.

## Setup
1. Create an EC2 instance (`t3.micro` are on free tier).
2. (Optional) Create a domain, and create a DNS record from domain -> Ec2 IP.
3. SSH into the box.
   1. Check you have `docker-compose`, and download the docker-compose [file](../assets/code/plausible.yaml)
   2. Create a secret key `export SECRET_KEY_BASE=$(openssl rand -base64 64 | tr -d '\n' ; echo)` (probably write this down)
   3. Set the domain name (from above) `export DOMAIN_NAME=...`
   4. `docker-compose up -d`
   5. Profit.

## Details
So what's running in the Ec2? Well firstly, Plausible:
```yaml
  plausible:
    image: plausible/analytics:latest
    container_name: plausible
    restart: always
    command: sh -c "sleep 10 && /entrypoint.sh db createdb && /entrypoint.sh db migrate && /entrypoint.sh run"
    depends_on:
      - plausible_db
      - plausible_events_db
      - mail
    ports:
      - 8000:8000
    environment:
      - CLICKHOUSE_DATABASE_URL=http://plausible_events_db:8123/plausible_events_db	
      - SECRET_KEY_BASE="${SECRET_KEY_BASE}"
      - BASE_URL=https://${DOMAIN_NAME}
      - ENABLE_EMAIL_VERIFICATION=true
      - MAILER_EMAIL=hello@${DOMAIN_NAME}
```
Two data stores. First, a postgres database for user data:
```yaml
  plausible_db:
    image: postgres:14-alpine
    restart: always
    volumes:
      - db-data:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD:-postgres}
```
and an event database for the analytics data.
```yaml
  plausible_events_db:
    image: clickhouse/clickhouse-server:22.6-alpine
    restart: always
    volumes:
      - event-data:/var/lib/clickhouse
    ports:
      - 8123:8123
    ulimits:
      nofile:
        soft: 262144
        hard: 262144
```
Also, Plausible (optionally) needs a mail server (for simple email verification, weekly emails).
```yaml
  mail:
    image: bytemark/smtp
    restart: always
```
All of this sets up plausible locally, running on port 8000. But we still need SSL certificate for `https://` and a reverse proxy to route requests to plausible. This is where [caddy](https://github.com/caddyserver/caddy) comes in; a reverse proxy with automatic SSL management:
```yaml
  caddy:
    image: caddy
    command: caddy reverse-proxy --from https://${DOMAIN_NAME}:443 --to http://plausible:8000
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - caddy_data:/data
      - caddy_config:/config
```
And with minimial effort, I get to see the trickle of traffic that comes to my corner of the internet.
