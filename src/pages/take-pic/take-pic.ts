import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-take-pic',
  templateUrl: 'take-pic.html',
})
export class TakePicPage {

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 411,
    targetHeight: 247.78
  }
  imagebase64: string;
  description: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    private alert: AlertController) {
  }

  
  ionViewWillEnter() {
    this.openCamera();
  }

  openCamera() {
    this.camera.getPicture(this.options)
    .then(image => {
      let base64Image = 'data:image/jpeg;base64,' + image;
      this.imagebase64 = base64Image;
    })
    .catch(err => {
      let alert = this.alert.create({
        title: 'Erro',
        message: err
      })
      alert.present()
      .then(() => this.closePage())
    })
  }


  closePage() {
    this.navCtrl.setRoot(HomePage)
  }

}
