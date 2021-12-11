FROM node:14.17.6

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . .

CMD ["yarn", "start"]