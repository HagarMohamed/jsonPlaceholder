import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private http:HttpClient) { }

  url: string = 'https://jsonplaceholder.typicode.com/posts';
  posts :any = [];

  getPosts(callback: any){
    this.http.get(this.url)
    .subscribe( response => {
      callback(response)
    })
  }

  
  getPostComment(id:number , callback: any){
    this.http.get(this.url+"/"+id+"/comments")
    .subscribe( response => {
      callback(response)
    })
  }


  deletePosts(id: number, callback: any){
    this.http.delete(this.url + "/" + id)
    .subscribe( response => {
      callback(response)
    })
  }

  
  updatePosts(postTitle: string, postBody: string, id: number, callback: any){

    let body = {title: postTitle, body: postBody, id: id}
    this.http.put(this.url, JSON.stringify(body)).subscribe( Response => {
     callback(Response)
    }

    )
}

}

