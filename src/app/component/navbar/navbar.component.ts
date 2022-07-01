import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public services: AuthService, private router: Router) {
    
   }

  ngOnInit(): void {
  }

  logout(){

    this.services.logout();
    this.router.navigateByUrl("/login");


  }

}
