FROM node:14-alpine
RUN mkdir -p /app

WORKDIR /app
COPY . /app
RUN npm install -g @angular/cli
COPY package.json /app
RUN npm install
#EXPOSE 4200 49153
EXPOSE 4200
CMD npm start
