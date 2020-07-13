FROM node:alpine as builder

WORKDIR /app/888front

ENV PATH /app/node_modules/.bin:$PATH

COPY 888front/package*.json ./888front

RUN npm install 

COPY . ./888front

CMD ["npm","start"]