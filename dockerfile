FROM node:24-debian

WORKDIR /nextjs

COPY . .

RUN curl -fsSL https://bun.sh/install | bash

RUN rm -rf node_modules
RUN rm -rf .next
RUN bun install
RUN npm run build

CMD ["bun", "start"]