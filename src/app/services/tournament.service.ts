import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../shared/services/data.service';
import { Observable } from 'rxjs';
import { Series } from '../shared/models/series';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TournamentService extends DataService {
  constructor(http: HttpClient) {
    super('https://api.pandascore.co/dota2/series/running/', http);
  }

  get(): Observable<Series[]> {
    return super.get().pipe(map((array) => array.map((o) => <Series>o)));
  }

  getOne(id: any): Observable<Series> {
    return super.getOne(id).pipe(map((o) => <Series>o));
  }
}
