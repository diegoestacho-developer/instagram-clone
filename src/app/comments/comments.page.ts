import { RestService } from './../rest.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  text_name: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries';

  user: string = 'thor';

  comment: any = this.user + ' ' + this.text_name;

  idPost: string;

  comments: any;
  
  constructor(private activatedRoute: ActivatedRoute, public restService: RestService) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.idPost) {
        this.idPost = params.idPost;
        this.getComments();
      }
    });
  }

  ngOnInit() {
    
  }

  getComments() {
    this.restService.getComments(this.idPost)
      .then(data => {
        this.comments = data;
      });
  }

}
