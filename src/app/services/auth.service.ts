import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any

  constructor(private myAuth: AngularFireAuth) {

    this.myAuth.authState.subscribe(_user =>{
      this.user = _user
      console.log(_user);
    })
   }

  login(){

    this.myAuth.signInWithPopup(new auth.GoogleAuthProvider())
    
    
  }

  logout(){

    this.myAuth.signOut();

  }
}
