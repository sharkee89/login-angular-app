import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private _authSvc: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if(this._authSvc.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    } 
  }

}
