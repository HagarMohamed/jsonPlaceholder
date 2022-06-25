import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private http : HttpClient) { }

  url: string = 'https://jsonplaceholder.typicode.com/posts';
  ngOnInit(): void {

   
  }

  createPost(titleInput : NgModel, bodyInput : NgModel){
    let body={
      title : titleInput.value,
      body : bodyInput.value
    }

    this.http.post(this.url, JSON.stringify(body))
    .subscribe( response => {
      console.log(response);
      
    })


  }

  print(title : NgModel){

    console.log(title)
  }
}
