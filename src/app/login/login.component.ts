import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      (response: any) => {
        alert('Login successful');
        localStorage.setItem('userId', response.id);
        this.router.navigate(['/transactions']);
      },
      () => alert('Login Failed')
    );
  }

}
