import { LoginProvider } from './../../providers/login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
    public sessionHelper: SessionProvider,
    private alert: AlertController) {
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
    return this.loginService.login(params).subscribe((retorno: any) => {
      console.log(retorno);
      return this.sessionHelper.setSession(retorno.data).then(() => {
        this.navCtrl.setRoot(TabsPage)
      })
    }, err => {
      let alert = this.alert.create({
        title: 'Erro ao fazer login',
        message: 'Usuário não encontrado',
        buttons: [
          {
            text: 'Tentar novamente',
            role: 'ok'
          }
        ]
      });
      alert.present();
    })
  }

  goToRegister() {
    this.navCtrl.push(RegisterPage)
  }

}
