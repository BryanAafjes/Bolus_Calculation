FROM node:14 as base

WORKDIR /home/node/app

COPY ./frontend/package*.json ./

RUN npm i

COPY ./frontend .

CMD node liveserver.js
