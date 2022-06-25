import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor( private services: AuthService) {

   }

  ngOnInit(): void {
  }

  login(){

    this.services.login();
    
    
  }

}
