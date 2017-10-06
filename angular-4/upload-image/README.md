# Upload Image

Clona esse repositório --- https://github.com/dobbinx3/examples --- dentro de algum servidor php local seu. pode ser Wampp, Xampp, qualquer um desses tem a pasta htdocs, ai vc clona o repositório dentro do htdocs (precisa ser dentro deles pra funcionar a API PHP).

Depois que clonar, sobe o servidor do seu xampp por exemplo, com isso a API vai está já no seu localhost.

Ai você vai até a raiz do projeto upload-image pelo terminal

"cd angular-4 upload-image"

Depois starta o projeto do angular pra subir o front-end

"ng serve -o"

o parâmetro "-o" é pra abrir automaticamente no browser depois que o webpack compilar os arquivos.

Ai vai abrir a tela bem simples com um input e um botão de enviar. Ai você pode testar se quiser.

Dependendo do seu sistema operacional o que você vai precisar fazer também é dar permissão para de escrita para o projeto, caso contrário vai dar permission denied para copiar o arquivo dentro da pasta uploads. o que eu rodei aqui no meu caso foi o comando:

"sudo chmod -R 777 /Applications/XAMPP"

Serve pra alterar a permissão da pasta.
E meu sistema operacional aqui no trabalho é o Mac, então pode variar a localização dependendo do seu. Mas o importante é dar permissão de escrita na pasta do XAMPP / WAMPP / ETC

--- 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
