FROM node:20-alpine

WORKDIR /nextjs

COPY . .

RUN rm -rf node_modules
RUN rm -rf .next
RUN bun install
RUN bun run build

CMD ["npm", "start"]