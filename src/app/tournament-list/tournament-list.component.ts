import { Component, OnInit } from '@angular/core';
import { Series } from '../shared/models/series';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css'],
})
export class TournamentListComponent implements OnInit {
  series: Series[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      console.log(data);
      this.series = data.tournaments;
    });
  }
}
