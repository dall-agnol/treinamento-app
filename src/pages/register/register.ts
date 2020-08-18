import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LoginProvider } from '../../providers/login/login';
import { SessionProvider } from '../../providers/session/session';
import { TabsPage } from '../tabs/tabs';
import { CameraOptions, Camera } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  description: string = '';
  
  image_user: string = '';
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 88,
    targetHeight: 88
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loginService: LoginProvider,
    private alertCtrl: AlertController,
    private sessionHelper: SessionProvider,
    private camera: Camera) {
  }


  register() {

    let alert = this.alertCtrl.create({
      message: 'Escolha uma foto de perfil',
      buttons: [{
        text: 'Escolher foto',
        role: 'ok',
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
      this.image_user = base64Image;
    })
    .catch(err => {
      let alert = this.alertCtrl.create({
        message: 'Houve um erro ao salvar sua foto', 
        buttons: [{
          text: 'Ok'
        }]
      })
      alert.present();
    })
  }

  cadastrar() {
    let params = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }
    this.loginService.register(params).subscribe(result => {
      if (result) {
        this.sessionHelper.setSession(result).then(() => {
          this.navCtrl.setRoot(TabsPage);
        })
      }
    })
  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage)
  }

}
