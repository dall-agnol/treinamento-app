import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class SessionProvider {

  constructor(public storage: Storage) {

  }


  setSession(user) {
    let usuario = {
      id: user['_id'],
      email: user.email,
      name: user.name,
      username: user.username,
      password: user.password,
      description: user.description ? user.description : ''
    }
    return this.storage.set('user', usuario);
  }

  getSession() {
    return this.storage.get('user');
  }

  clearSession() {
    return this.storage.remove('user');
  }

}
