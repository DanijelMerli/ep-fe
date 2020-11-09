import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';
  userToken: string;

  constructor(private http: HttpClient) {}

  login(model: any) {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    const options = { headers: headers };
    return this.http.post(this.baseUrl + 'login', model, options).pipe(
      map((response: HttpResponse<any>) => {
        const token = response['token'];
        if (token) {
          console.log(token);
          localStorage.setItem('token', token);
          this.userToken = token;
        }
      })
    );
  }
}
