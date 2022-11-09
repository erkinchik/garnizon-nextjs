FROM node:12.18.1

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

RUN npm run build

CMD [ "npm", "start" ]