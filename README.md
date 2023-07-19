# Backend Server

Simple server for my needs.

## Project Functionality

Server gets texts by provided dialogID parameter from the database and sends json with texts to client. To succesfully make a request client should provide a valid "x-api-key" as a header. Server also has an express rate limiter, so the client can't make more than 1000 request in one hour.

## Technologies used

- NodeJs
- Express
- Express-rate-limiter
- MySQL2
- docker
- docker-compose

## How to start

1. `git clone https://github.com/kanae367/backend-server`
2. `cd app`
3. `cp public.env .env`
4. Enter your values instead of placeholder inside the .env file
5. `docker compose up`
