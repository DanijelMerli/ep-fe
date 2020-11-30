import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
      (error) => this.handleError(error)
    );
  }

  private handleError(error: HttpErrorResponse) {
    const applicationError = error.headers.get('Application-Error');
    if (applicationError) {
      throw new Error(applicationError);
    }

    const serverError = error.error;
    let modelStateErrors = '';
    if (serverError) {
      for (const key in serverError) {
        if (serverError[key]) {
          modelStateErrors += serverError[key] + '\n';
        }
      }
    }

    throw new Error(modelStateErrors || 'Server error');
  }
}
