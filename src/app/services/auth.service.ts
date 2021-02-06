import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { AlertifyService } from '../alertify.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:5000/api/auth/';
  private jwtHelper = new JwtHelperService();
  decodedToken;

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertify: AlertifyService
  ) {}

  private requestOptions() {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    return { headers: headers };
  }

  logIn(model: any) {
    return this.http
      .post(this.baseUrl + 'login', model, this.requestOptions())
      .pipe(
        map((response: HttpResponse<any>) => {
          const token = response['token'];
          if (token) {
            localStorage.setItem('token', token);
            this.decodedToken = this.jwtHelper.decodeToken(token);
          }
        })
      );
  }

  register(model: any) {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    const options = { headers: headers };
    return this.http.post(
      this.baseUrl + 'register',
      model,
      this.requestOptions()
    );
  }

  logOut() {
    localStorage.removeItem('token');
    this.alertify.success('Logout successful');
    this.router.navigate(['/']);
  }

  loggedIn() {
    return !this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
  }

  handleError(error: HttpErrorResponse) {
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
