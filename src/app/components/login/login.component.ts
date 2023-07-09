import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  ngOnInit(): void {

  }

  constructor(private as:AuthService, private router: Router) { }

  async login() {
    try {
      let resp: any = await this.as.loginWithUsernameAndPassword(this.username, this.password);
      console.log(resp);
      localStorage.setItem('token', resp['token']);
      this.router.navigateByUrl('/home');
    } catch (e) {
      alert('Login failed');
      console.error(e);
    }
  }

}
