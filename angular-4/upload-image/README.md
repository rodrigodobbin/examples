# Upload Image

This project uses an PHP API, and because of it you should clone it inside an apache friend env. Like Xampp, Wampp, etc.

If you clone the entire example repository, to run the application you just have to run:

`ng serve -o` for a dev server. The app will automatically reload if you change any of the source files.

But if you get only this project, you should run:

`ng serve -o --prod` and the environment variables will set correctly. The app will automatically reload if you change any of the source files.

---

### PS

Maybe you will need to give permission to the application, otherwise it won't be able to write the image inside the folder `uppload-image > api > uploads`.

If you are using xampp in linux you can run this command in your terminal:

`sudo chmod -R 777 /opt/lampp/htdocs`

Other operational system or other apache tools you should search to se how to give permission for it.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
