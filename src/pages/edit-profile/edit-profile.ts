import { SessionProvider } from './../../providers/session/session';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  session: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sessionHelper: SessionProvider) {
  }

  ionViewWillEnter() {
    this.sessionHelper.getSession().then(session => {
      this.session = session;
    })
  }

  
}
