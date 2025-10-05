FROM node:24-slim

WORKDIR /nextjs

RUN curl -fsSL https://bun.sh/install | bash

COPY . .

RUN rm -rf node_modules
RUN rm -rf .next
RUN bun install
RUN npm run build

CMD ["bun", "start"]