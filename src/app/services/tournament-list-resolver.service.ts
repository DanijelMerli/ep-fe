import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Tournament } from '../shared/models/tournament';
import { TournamentService } from './tournament.service';

@Injectable({
  providedIn: 'root'
})
export class TournamentListResolverService implements Resolve<Tournament[]> {

  constructor(private service: TournamentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Tournament[] | Observable<Tournament[]> | Promise<Tournament[]> {
    return this.service.get();
  }
}
