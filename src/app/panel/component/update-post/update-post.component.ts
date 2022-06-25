import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../../panel_services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  url: string = 'https://jsonplaceholder.typicode.com/posts';
  post:any = {
    id: "",
    title: "_title",
    body: "_body"
  }  

  constructor(private services : PostsService, private route : ActivatedRoute) {
    
    let _id = this.route.snapshot.queryParamMap.get('id');
    let _title = this.route.snapshot.queryParamMap.get('title');
    let _body = this.route.snapshot.queryParamMap.get('body');


    this.post ={
      id: _id,
      title: _title,
      body: _body
    }  
   }

  ngOnInit(): void {
    //todo get from routing

  }

  updatePost(titleModel : NgModel, bodyModel : NgModel){

    this.services.updatePosts(titleModel.value, bodyModel.value, this.post.id,(Response: any )=> {
      console.log(Response)
    }

    )

  }
  



}
