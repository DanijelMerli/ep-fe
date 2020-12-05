import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { TournamentComponent } from './tournament/tournament.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { TournamentPageComponent } from './tournament-page/tournament-page.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AppErrorHandler } from './app-error-handler';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TournamentListComponent,
    TournamentComponent,
    TournamentPageComponent,
    LoaderComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FontAwesomeModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
