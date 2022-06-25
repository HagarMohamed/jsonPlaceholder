import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../panel_services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments :any = [];
  id:any ;

  constructor(private services:PostsService, private route : ActivatedRoute){
    this.id = this.route.snapshot.queryParamMap.get('id');
  }


  ngOnInit(): void {

    this.services.getPostComment(this.id,(response:any) => {
      console.log(response);
      this.comments = response;
    });

    
    
  }

}
