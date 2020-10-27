import { HttpClient } from '@angular/common/http';
import { UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Tournament } from '../models/tournament';

export class DataService {

  constructor(protected url: string, protected http: HttpClient) { }

  get(): Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  getOne(id: any): Observable<any>{
    return this.http.get<any>(this.url + id);
  }
}
