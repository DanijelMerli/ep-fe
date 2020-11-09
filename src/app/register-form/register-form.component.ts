import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  model: any = {};

  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.loggedIn()) {
      this.router.navigate(['/']);
    }
  }

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      () => {
        console.log('Failed to register');
      }
    );
  }
}
