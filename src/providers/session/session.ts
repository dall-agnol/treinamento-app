import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class SessionProvider {

  constructor(public storage: Storage) {

  }


  setSession(user) {
    return this.storage.set('user', user);
  }

  getSession() {
    return this.storage.get('user');
  }

}
