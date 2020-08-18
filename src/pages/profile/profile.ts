import { SessionProvider } from './../../providers/session/session';
import { PhotoProvider } from './../../providers/photo/photo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile_segment: string;
  images: Array<any> = new Array();

  user: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private photoService: PhotoProvider,
    private alertCtrl: AlertController,
    private sessionHelper: SessionProvider) {
  }

  ionViewWillEnter() {
    this.profile_segment = 'grid';
    this.loadGridPhotos();
    this.loadProfile();
  }

  logout() {
    this.sessionHelper.clearSession().then(() => this.navCtrl.setRoot(LoginPage))
  }

  loadProfile() {
    this.sessionHelper.getSession().then(session => {
      this.user = session;
      console.log(session)
    })
  }

  loadGridPhotos() {
    this.sessionHelper.getSession().then(session => {
      this.photoService.getPhotosById(session.id).subscribe((photos: any) => {
        this.images = photos;
      }, err => {
        console.log(err);
        let alert = this.alertCtrl.create({
          message: 'Houve um erro ao buscar as fotos do usuário',
          buttons: [{ text: 'ok'}]
        })
        alert.present();
      });
    })
  }

  goEditProfile() {
    let modal = this.modalCtrl.create(EditProfilePage);
    modal.present();
  }

}
