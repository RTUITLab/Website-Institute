FROM node:20.10.0-alpine AS build
WORKDIR /app
COPY package.json /app
RUN npm install
COPY .next /app
EXPOSE 3000
CMD ["next","start"]
