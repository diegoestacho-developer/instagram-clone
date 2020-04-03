import { RestService } from './../rest.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  posts: any;

  constructor(public restService: RestService, public router: Router) { 
    this.getPosts();
  }

  getPosts() {
    this.restService.getPosts()
      .then(data => {
        this.posts = data;
      });
  }

  comments(post) {
    console.log(post.id);
    this.router.navigate(['http://localhost:3000/comments?idPost=' + post.id], {
      state: {
        id: post.id
      }
    });
  }

}
