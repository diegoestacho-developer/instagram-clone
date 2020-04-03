import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  myPostsView: boolean = true;

  markedPostsView: boolean = false;

  constructor() {}

  segmentChanged($event) {
    if ($event.detail.value == 'my_posts') {
      this.myPostsView = true;
      this.markedPostsView = false;
    }
    if ($event.detail.value == 'marked_posts') {
      this.markedPostsView = true;
      this.myPostsView = false;
    }
  }

}
