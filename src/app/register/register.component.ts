import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};

  constructor(
    private _authSvc: AuthService
  ) { }

  ngOnInit() {
  }

  registerUser() {
    this._authSvc.registerUser(this.registerUserData)
      .subscribe(registerResponse => {
        localStorage.setItem('token', registerResponse.token);
      }, err => {
        console.log(err);
      });
  }

}
