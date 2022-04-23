import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  isUserLogged:boolean = false;

  constructor(private authService : UserAuthService) {

    this.isUserLogged = this.authService.isUserLogged;
  }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged;
  }

  login()
  {
    this.authService.login("userName", "password");
    this.isUserLogged = this.authService.isUserLogged;
  }

  logout()
  {
    this.authService.logout();
    this.isUserLogged = this.authService.isUserLogged;
  }

}
