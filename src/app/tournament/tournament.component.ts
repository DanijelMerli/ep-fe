import { Component, Input } from '@angular/core';
import { Series } from '../shared/models/series';

@Component({
  selector: 'tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css'],
})
export class TournamentComponent {
  @Input() s: Series;
  queryParams: any;

  constructor() {}

  ngOnInit(): void {
    this.queryParams = {
      id: this.s.id,
    };
  }
}
