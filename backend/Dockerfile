FROM node:14 as base

WORKDIR /home/node/app

COPY ./backend/package*.json ./

RUN npm i

COPY ./backend .

CMD npm run dev
