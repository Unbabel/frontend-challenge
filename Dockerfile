FROM node:lts-bullseye-slim

WORKDIR /app

COPY package*.json *.lock ./

RUN yarn install --immutable

COPY . .

EXPOSE 9090
CMD ["yarn", "dev"]