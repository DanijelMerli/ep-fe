import { query } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Tournament } from '../shared/models/tournament';

@Component({
  selector: 'tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent {
  
  @Input() tournament: Tournament;
  queryParams: any;

  constructor() { }

  ngOnInit(): void {
    this.queryParams = { id: this.tournament.id }
  }

}
