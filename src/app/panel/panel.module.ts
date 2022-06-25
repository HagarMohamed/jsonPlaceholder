import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { PostsComponent } from './component/posts/posts.component';
import { CreatePostComponent } from './component/create-post/create-post.component';
import { UpdatePostComponent } from './component/update-post/update-post.component';
import { CommentsComponent } from './component/comments/comments.component';


@NgModule({
  declarations: [
    PostsComponent,
    CreatePostComponent,
    UpdatePostComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PanelRoutingModule,
    FormsModule
  ]
})
export class PanelModule { }
