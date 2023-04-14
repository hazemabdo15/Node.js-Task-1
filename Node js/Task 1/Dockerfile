FROM alpine

WORKDIR /app

COPY Project.js .

RUN apk add --update nodejs
RUN apk add --update npm
RUN npm install express
RUN npm install express
RUN npm install express-handlebars
RUN npm install nodemon


CMD node demo.js