import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionProvider } from '../session/session';


@Injectable()
export class LoginProvider {

  url: string = 'http://localhost:3000'

  constructor(
    public http: HttpClient,
    private sessionHelper: SessionProvider) {

  }

  register(params) {
    return this.http.post(this.url + '/register', params);
  }


  login(params?) {
    return this.http.post(this.url + '/login', params)
  }

  logout() {
    return this.sessionHelper.clearSession();
  }

}
