import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class DataService {
  apiToken = '?token=70MRXjyRB-iwpeUMk864S07GZkuBsykaQFaqRlc8Me6MjOUlh9w';
  constructor(protected url: string, protected http: HttpClient) {}

  get(): Observable<any[]> {
    return this.http.get<any[]>(this.url + this.apiToken);
  }

  getOne(id: any): Observable<any> {
    return this.http.get<any>(
      this.url +
        '?filter[id]=' +
        id +
        '&token=70MRXjyRB-iwpeUMk864S07GZkuBsykaQFaqRlc8Me6MjOUlh9w'
    );
  }
}
