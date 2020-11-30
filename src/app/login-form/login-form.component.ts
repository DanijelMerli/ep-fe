import { HttpErrorResponse } from '@angular/common/http';
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
      (error: Response) => {
        throw new Error(`${error.status}: ${error.statusText}`);
      }
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
