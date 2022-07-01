import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private authService: AuthService, private route: ActivatedRoute,private router: Router){

    console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
    console.log(this.authService.user)

    this.authService.user$.subscribe(u =>{
      if(u){
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || "/";
        this.router.navigateByUrl(returnUrl);
      }
    })
      
    
  }

  



}

