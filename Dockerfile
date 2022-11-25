FROM node:16-alpine
RUN npm install
WORKDIR /app
COPY . /app
#EXPOSE 4200 49153
EXPOSE 4200
CMD npm start
