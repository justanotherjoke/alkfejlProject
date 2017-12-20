import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./user";
import { tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
}

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string = "/dashboard";
  user: User;

  constructor(
    private http: HttpClient
  ) { }

  login(user: User) {
    return this.http.post<User>(
      // 'http://localhost:4200/api/user/login',
      'api/user/login',
      user,
      httpOptions
    ).pipe(
      tap((user: User) => {
        this.isLoggedIn = true;
        this.user = user;
      })
    )
    .toPromise();
  }

  register(user: User){
    return this.http.post<User>(
      'api/user/register',
      user,
      httpOptions
    ).toPromise();
  }

  logout() {
    this.isLoggedIn = false;
    this.user = new User();
    // https://stackoverflow.com/a/46816238
    return this.http.post('api/user/logout', {}, httpOptions).pipe(
      tap(res => {
        console.log('service logout', res);
      })
    ).toPromise();
  }

}
