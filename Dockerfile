FROM node:14-alpine
RUN mkdir -p /app

WORKDIR /app
COPY . /app

RUN pwd
RUN ls -l

RUN npm install --loglevel verbose

RUN npm run build --prod


## stage 2
FROM nginx:1.20.1
COPY --from=build-step /app/dist/emp-ui-app /usr/share/nginx/html
EXPOSE 80

#EXPOSE 4200 49153
#EXPOSE 4200
#CMD npm start
