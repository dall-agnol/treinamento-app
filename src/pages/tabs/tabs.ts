import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { TakePicPage } from '../take-pic/take-pic';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TakePicPage;
  tab3Root = ProfilePage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

}
