FROM node:14-alpine
RUN mkdir -p /app

WORKDIR /app
COPY . /app

#Linux setup
RUN apk update \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

RUN npm install -g @angular/cli
COPY package.json /app
RUN npm install
#EXPOSE 4200 49153
EXPOSE 4200
CMD npm start
