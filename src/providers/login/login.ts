import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LoginProvider {

  url: string = 'http://localhost:3000'

  constructor(public http: HttpClient) {

  }


  login(params?) {
    return Promise.resolve(
      setTimeout(() => {
        return {
          nome: 'Lorenzo Garcia',
          user: '@lorenzo',
          email: 'lorenzogarcia@hotmail.com',
          password: '123'
        }
    }, 1000))
    //return this.http.post(this.url + '/login', params)
  }

  logout(params) {
    return Promise.resolve(true);
    //return this.http.post(this.url + '/logout', params);
  }

}
