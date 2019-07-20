import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
username:string = null;
password:string = null;
  constructor(private authSvc:AuthService ,private router:Router) {}
  login(){
     let userData = {
       "username":this.username,
       "password":this.password
     }
    if(this.authSvc.auth(userData)){
      this.router.navigateByUrl("user-home");
    } 
    
  }
}
