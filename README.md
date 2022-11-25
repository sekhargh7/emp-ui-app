# emp-ui-app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## configure the proxy config
https://jmrobles.medium.com/mastering-angular-proxy-configuration-6c8df0b175fe

## dockerizing
https://www.indellient.com/blog/how-to-dockerize-an-angular-application-with-nginx/

https://javascript.plainenglish.io/how-to-dockerize-angular-application-3cd67e963832

## dockerizing with environment variables
https://pumpingco.de/blog/environment-variables-angular-docker/

## reading environment variable
https://zetcode.com/javascript/dotenv/

## diffentec between command and entry point
https://awstip.com/docker-run-vs-cmd-vs-entrypoint-78ca2e5472bd

https://shisho.dev/blog/posts/docker-cmd-entrypoint/

## getaddrinfo EAI_AGAIN registry.npmjs.org for fixing the issue
Simple fix is to create the file /etc/docker/daemon.json
and insert:
{
"dns": ["10.0.0.2", "8.8.8.8"]
}
https://github.com/StefanScherer/dockerfiles-windows/issues/270
and restart the system
###############################################
