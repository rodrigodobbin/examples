import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Requests provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Requests {

  constructor(public http: Http) {
    console.log('Hello Requests Provider');
  }

  getUsuario () {

    return this.http.get('./assets/static/usuario.json');

  }

}
