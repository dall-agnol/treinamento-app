import { SessionProvider } from './../../providers/session/session';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  user: any = {};
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 88,
    targetHeight: 88
  }
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private camera: Camera,
    private alert: AlertController,
    private sessionHelper: SessionProvider) {
  }

  ionViewWillEnter() {
    this.sessionHelper.getSession().then(session => {
      this.user = session;
    })
  }

  changePhoto() {
    let alert = this.alert.create({
      message: 'Escolha uma opção para atualizar a foto',
      buttons: [
        {
          text: 'Foto da galeria',
          handler: () => this.abrirGaleria()
        },
        {
          text: 'Tirar foto',
          handler: () => this.abrirFoto()
        }
      ]
    });
    alert.present();
  }

  abrirGaleria() {
    this.options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
    this.tirarFoto()
  }

  abrirFoto() {
    this.options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
    this.tirarFoto()
  }

  tirarFoto() {
    this.camera.getPicture(this.options)
    .then(imageBase => {
      let base64Image = 'data:image/jpeg;base64,' + imageBase;
      this.user.imageUser = base64Image;
    })
    .catch(err => {
      let alert = this.alert.create({
        message: 'Houve um erro ao salvar sua foto', 
        buttons: [{
          text: 'Ok'
        }]
      })
      alert.present();
    })
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  
}
