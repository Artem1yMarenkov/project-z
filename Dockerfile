FROM node:18.10.0

WORKDIR /usr/src/app

COPY ./package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]