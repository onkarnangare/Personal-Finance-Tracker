import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register({ username: this.username, password: this.password }).subscribe(
      () => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      () => alert('Registration Failed')
    );
  }

}
