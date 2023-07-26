import { Component, OnInit } from '@angular/core';
// import { FirebaseStoreService } from '../services/firebase-store.service';


@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  images: string[] | undefined;

  constructor() {
   }

  ngOnInit() {
    // this.loadImages();
  }

}
