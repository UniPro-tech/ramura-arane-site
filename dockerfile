FROM oven/bun:latest

WORKDIR /nextjs

COPY . .

RUN rm -rf node_modules
RUN rm -rf .next
RUN bun install
RUN bun run build

CMD ["bun", "start"]