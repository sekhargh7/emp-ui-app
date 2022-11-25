FROM node:14-alpine
RUN mkdir -p /app
COPY package.json /app
RUN npm install
WORKDIR /app
COPY . /app
RUN npm install -g @angular/cli
#EXPOSE 4200 49153
EXPOSE 4200
CMD npm start
