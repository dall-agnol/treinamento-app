import { SessionProvider } from './../../providers/session/session';
import { PhotoProvider } from './../../providers/photo/photo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile_segment: string;
  images: Array<any> = new Array();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private photoService: PhotoProvider,
    private sessionHelper: SessionProvider) {
  }

  ionViewWillEnter() {
    this.profile_segment = 'grid';
    this.loadGridPhotos();
  }

  loadGridPhotos() {
    this.sessionHelper.getSession().then(session => {
      this.photoService.getPhotosById(session.id).subscribe((photos: any) => {
        this.images = photos;
      })
    })
  }

  goEditProfile() {
    let modal = this.modalCtrl.create(EditProfilePage);
    modal.present();
  }

}
