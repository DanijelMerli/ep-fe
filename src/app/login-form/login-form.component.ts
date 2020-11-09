import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  model: any = {};

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/']);
    }
  }

  logIn() {
    this.authService.logIn(this.model).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      () => {
        console.log('Failed to login');
      }
    );
  }
}
