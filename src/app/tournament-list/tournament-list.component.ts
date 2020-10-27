import { Component, OnInit } from '@angular/core';
import { Tournament } from '../shared/models/tournament';
import { TournamentService } from '../services/tournament.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent implements OnInit {

  tournaments: Tournament[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.tournaments = data.tournaments);
  }
}
