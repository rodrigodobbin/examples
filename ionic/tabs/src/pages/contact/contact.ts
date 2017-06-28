import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Requests } from '../../providers/requests';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private usuario: Object = {};

  constructor(
    public navCtrl: NavController,
    public requests: Requests
    ) {

  }

  ionViewDidLoad() {
    this.getInfo();
  }

  getInfo () {
    this.requests
      .getUsuario()
      .map(res => res.json())
      .subscribe(
          data => this.usuario = data,
          err => console.log('ERROR', err),
        );
  }
}
