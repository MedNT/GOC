import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../services/AuthService';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isAuth: boolean;
  username: string;
  password: string;

  constructor(private route: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isAuth = this.authService.isAuth;
  }

  login(form: NgForm) {
    if (this.authService.signIn(form.value.username, form.value.password)) {
      this.isAuth = this.authService.isAuth;
      this.route.navigate(['/list']);
    }
  }

  logOut() {
    this.authService.signOut();
    this.isAuth = this.authService.isAuth;
  }

}
