import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [

  { path: 'panel', loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule) },

  { path: 'login', component: LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: 'panel/allposts' }




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
