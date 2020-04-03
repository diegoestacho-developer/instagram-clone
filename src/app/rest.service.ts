import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl: string = 'http://localhost:3000';

  constructor(public http: HttpClient) { }

  getPosts() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/posts').subscribe(data => { resolve(data) },
        err => {
          console.log(err);
        });
    })
  }

  getComments(idPost) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/comments?idPost='+idPost).subscribe(data => { resolve(data) },
        err => {
          console.log(err);
        });
    })
  }

}
