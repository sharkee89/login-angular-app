import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  constructor(
    private _authSvc: AuthService
  ) { }

  ngOnInit() {
  }

  loginUser() {
    this._authSvc.loginUser(this.loginUserData)
      .subscribe(loginResponse => {
        localStorage.setItem('token', loginResponse.token);
      }, err => {
        console.log(err);
      })
  }

}
