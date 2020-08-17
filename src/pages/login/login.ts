import { LoginProvider } from './../../providers/login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionProvider } from '../../providers/session/session';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: string;
  password: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loginService: LoginProvider,
    public sessionHelper: SessionProvider) {
  }

  ionViewWillEnter() {
    this.sessionHelper.getSession().then(user => {
      if (user) {
        return this.login(true);
      }
    })
  }


  login(logged?) {
    if (logged) {
      return this.navCtrl.setRoot(TabsPage)
    }
    let params = {
      usuario: this.user,
      senha: this.password
    }
    return this.loginService.login(params).then(retorno => {
      return this.sessionHelper.setSession(retorno).then(() => {
        this.navCtrl.setRoot(TabsPage)
      })
    })
  }

  goToRegister() {
    this.navCtrl.push(RegisterPage)
  }

}
