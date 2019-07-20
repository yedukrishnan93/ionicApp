import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  auth(data){
    if(data.username == "admin" && data.password == "123"){
      return true;
    }else{
      return false
    }
  }
}
