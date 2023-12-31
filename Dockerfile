FROM node:20.10.0-alpine AS build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run","start"]
