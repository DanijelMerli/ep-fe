import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentListResolverService } from './services/tournament-list-resolver.service';
import { TournamentResolverService } from './services/tournament-resolver.service';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { TournamentPageComponent } from './tournament-page/tournament-page.component';


const routes: Routes = [
  { path: "tournaments", component: TournamentListComponent, resolve: { tournaments: TournamentListResolverService } },
  { path: "info", component: TournamentPageComponent, resolve: { tournament: TournamentResolverService } },
  { path: "", redirectTo: "/tournaments", pathMatch: "full"},  // Redirect
  { path: "**", component: TournamentListComponent }  // 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TournamentListComponent, TournamentPageComponent ]
