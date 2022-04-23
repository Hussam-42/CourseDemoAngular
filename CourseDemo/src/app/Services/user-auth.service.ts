import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private isLoggedSubject : BehaviorSubject<boolean>;
  currentURL : string;

  constructor(private router : Router, private activatedRoute : ActivatedRoute) {

    this.isLoggedSubject = new BehaviorSubject<boolean>(this.isUserLogged);

    this.currentURL = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  login(userName : string, password : string)
  {
    let userToken = "123456789"
    localStorage.setItem("token", userToken);
    this.isLoggedSubject.next(true);
    this.router.navigate([this.currentURL]);
  }

  logout()
  {
    localStorage.removeItem("token");
    this.isLoggedSubject.next(false);
  }

  get isUserLogged() : boolean
  {
    return (localStorage.getItem("token"))? true : false;
  }

  getLoggedStatus() : Observable<boolean>
  {
    return this.isLoggedSubject.asObservable();
  }
}
