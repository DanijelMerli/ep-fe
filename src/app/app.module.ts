import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { TournamentComponent } from './tournament/tournament.component';
import { HttpClientModule } from '@angular/common/http';
import { TournamentPageComponent } from './tournament-page/tournament-page.component';
import { LoaderComponent } from './shared/components/loader/loader.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TournamentListComponent,
    TournamentComponent,
    TournamentPageComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
