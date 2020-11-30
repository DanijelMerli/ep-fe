import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient) {}

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
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
