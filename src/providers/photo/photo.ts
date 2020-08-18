import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class PhotoProvider {

  url: string = 'http://localhost:3000';

  constructor(public http: HttpClient) {

  }

  uploadPhoto(data) {
    let params = {
      user: data.user,
      image: data.image,
      description: data.description
    }

    return this.http.post(this.url + '/post', params);

  }

  getPhotos() {
    return this.http.get(this.url + '/posts')
  }

  getPhotosById(id) {
    return this.http.get(`${this.url}/postsById/${id}`)
  }


  getPhoto(id) {
    return this.http.get(`${this.url}/posts/${id}`)
  }




}
