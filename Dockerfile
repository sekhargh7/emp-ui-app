FROM node:14-alpine
RUN mkdir -p /app

WORKDIR /app
COPY . /app

RUN pwd
RUN ls -l

RUN npm install --loglevel verbose
#EXPOSE 4200 49153
EXPOSE 4200
CMD npm start
