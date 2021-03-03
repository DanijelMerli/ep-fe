import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Series } from '../shared/models/series';

@Component({
  selector: 'app-tournament-page',
  templateUrl: './tournament-page.component.html',
  styleUrls: ['./tournament-page.component.css'],
})
export class TournamentPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  series: Series;

  ngOnInit(): void {
    this.route.data.subscribe((data) => (this.series = data.series));
  }
}
