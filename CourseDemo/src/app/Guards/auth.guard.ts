import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../Services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // targetUrl : string;
  constructor(private AuthService : UserAuthService, private router : Router)
  {
    // this.targetUrl = route.data['target'] as string;
  }

  canActivate():  boolean {

      if(this.AuthService.isUserLogged)
      {
        return true;
      }
      else
      {
        alert("you must login first");
        this.router.navigate(["/login-user"]);
        //, { queryParams: { returnUrl : this.targetUrl }}
        return false;
      }
  }
}
