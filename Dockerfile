FROM node:16 as base

WORKDIR /home/node/

COPY package.json ./

COPY . .

# Production.
FROM base as production

ENV NODE_PATH=./build

RUN npm run build
