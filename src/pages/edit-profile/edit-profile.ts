import { SessionProvider } from './../../providers/session/session';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  user = {};
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
          handler: () => 
        }
      ]
    })
  }

  abrirGaleria() {

  }

  abrirCamera() {

  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  
}
