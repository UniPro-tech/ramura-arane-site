FROM node:latest

RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*

COPY ./ /home/node/app
WORKDIR /home/node/app

RUN npm install
CMD [ "npm run start -p 3000" ]