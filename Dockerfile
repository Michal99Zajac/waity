FROM node:14-alpine as base

FROM base as deps

WORKDIR /workspace

COPY package.json .
COPY yarn.lock .
COPY .yarnrc.yml .
COPY .yarn .yarn
COPY src src

RUN find src \! -name "package.json" -mindepth 2 -maxdepth 2 -print | xargs rm -rf

FROM base as builder

ENV PORT=8080

WORKDIR /workspace

COPY --from=deps /workspace .

RUN yarn install --immutable

COPY . .

RUN yarn install --immutable

RUN yarn workspace frontend build

EXPOSE ${PORT}

CMD yarn workspace backend start
