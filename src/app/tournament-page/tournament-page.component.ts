import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tournament } from '../shared/models/tournament';

@Component({
  selector: 'app-tournament-page',
  templateUrl: './tournament-page.component.html',
  styleUrls: ['./tournament-page.component.css']
})
export class TournamentPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  tournament: Tournament;

  ngOnInit(): void {
    this.route.data.subscribe(data => this.tournament = data.tournament);
  }
}
