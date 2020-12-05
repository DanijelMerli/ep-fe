import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../alertify.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
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

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        this.alertify.success('Registration successful');
      },
      (error) => this.authService.handleError(error)
    );
  }
}
