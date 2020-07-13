FROM node:alpine as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH


COPY 888front/package*.json ./

RUN npm install 

COPY . ./

CMD ["npm","start"]