FROM node:14

WORKDIR /backend

COPY package.json .

COPY yarn.lock .

ENV PORT=8080

RUN yarn install --immutable

COPY . .

EXPOSE ${PORT}

CMD yarn start
