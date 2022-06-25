import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../panel_services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private services:PostsService, private router: Router){

  }

  posts :any = [];
  ngOnInit(): void {

    this.services.getPosts((response:any) => {
      console.log(response);
      this.posts = response;
    });

    
    
  }
  goUpdate(_title: string, _body: string, _id: number){

    this.router.navigate(['panel/updatePost'], {queryParams: {title : _title, body : _body, id : _id}})
  
   }

   viewComment(_id:number){
    this.router.navigate(['panel/allcomments'], {queryParams: {id : _id}})
   }

//  showAlert(id : number){

//   alert(id);

//  }

 delete(id : number){

  this.services.deletePosts(id, (Response: any) =>{
    alert("deleted succeesfully");

  })


 }
 

}

