import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: String = 'http://localhost:5000/api/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private _httpClient: HttpClient) { }

  login(model: any){
    return this._httpClient.post(this.baseURL + 'login', model)
    .pipe(
      map((response: any) => {
        const user = response;
        if(user)
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          console.log(this.decodedToken);
      })
    );
  }

  register(model: any){
    return this._httpClient.post(this.baseURL + 'register', model)
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
