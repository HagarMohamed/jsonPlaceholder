import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any
  user$:Observable<any>

  constructor(private myAuth: AngularFireAuth) {
    this.user$ = this.myAuth.authState
    
    this.myAuth.authState.subscribe(_user =>{
      this.user = _user
      console.log(_user);
    })
   }

  login(){

    this.myAuth.signInWithRedirect(new auth.GoogleAuthProvider())
    
    
  }

  logout(){

    this.myAuth.signOut();

  }
}
