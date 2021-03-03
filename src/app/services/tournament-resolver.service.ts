import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Series } from '../shared/models/series';
import { TournamentService } from './tournament.service';

@Injectable({
  providedIn: 'root',
})
export class TournamentResolverService implements Resolve<Series> {
  constructor(private service: TournamentService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Series | Observable<Series> | Promise<Series> {
    const id = route.queryParamMap.get('id');
    return this.service.getOne(id);
  }
}
