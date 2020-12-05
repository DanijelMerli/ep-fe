import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../alertify.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  model: any = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/']);
    }
  }

  logIn() {
    this.authService.logIn(this.model).subscribe(
      () => {
        this.alertify.success('Login succesful');
        this.router.navigate(['/']);
      },
      (error) => {
        this.authService.handleError(error);
      }
    );
  }
}
