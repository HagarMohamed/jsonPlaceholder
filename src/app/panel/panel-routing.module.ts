import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { CommentsComponent } from './component/comments/comments.component';
import { CreatePostComponent } from './component/create-post/create-post.component';
import { PostsComponent } from './component/posts/posts.component';
import { UpdatePostComponent } from './component/update-post/update-post.component';

const routes: Routes = [
  {path: 'createPost', component: CreatePostComponent, canActivate: [AuthGuardService]},
  {path: 'allposts', component: PostsComponent},
  {path: 'allcomments', component: CommentsComponent},
  {path: 'updatePost', component: UpdatePostComponent, canActivate: [AuthGuardService]},
  { path: '', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
