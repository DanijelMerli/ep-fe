import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../shared/services/data.service';
import { Observable } from 'rxjs';
import { Tournament } from '../shared/models/tournament';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TournamentService extends DataService {
  constructor(http: HttpClient) {
    super('http://localhost:5000/api/tournaments/', http);
  }

  get(): Observable<Tournament[]> {
    return super.get().pipe(map((array) => array.map((o) => <Tournament>o)));
  }

  getOne(id: any): Observable<Tournament> {
    return super.getOne(id).pipe(map((o) => <Tournament>o));
  }
}
