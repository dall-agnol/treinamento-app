import { TakePicPage } from './../take-pic/take-pic';
import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;


  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) {

  }

  scrollToTop() {
    this.content.scrollToTop()
  }


  openCamera() {
    this.navCtrl.setRoot(TakePicPage)
  }



}
