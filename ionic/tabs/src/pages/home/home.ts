import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private socialSharing: SocialSharing,
    public loadingCtrl: LoadingController
    ) {

  }

  capturaImagem () {
    let loading = this.loadingCtrl.create();
    loading.present();

    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      // compartilhando imagem
      this.socialSharing.share('Compartilhando uma imagem dahora', 'Ionic tabs', base64Image).then(() => {
        console.log('compartilhou');
        loading.dismiss();
      }).catch(() => {
        console.log('não compartilhou');
        loading.dismiss();
      });
    }, (err) => {
     console.log('não tirou foto');
     loading.dismiss();
    });
  }

}
