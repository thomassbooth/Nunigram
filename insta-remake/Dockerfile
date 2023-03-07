FROM node:19-alpine

WORKDIR /app

COPY . .

RUN npm install 

EXPOSE 8080

CMD ["npm", "run", "dev"]