FROM node:18-alpine

WORKDIR /usr/app

COPY package*.json ./
COPY src/.env ./
RUN npm install && npm install -g nodemon

COPY . .

EXPOSE 9000
CMD ["npm", "run", "dev"]