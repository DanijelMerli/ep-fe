import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {
  faUser,
  faSignOutAlt,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  faCaretDown = faCaretDown;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  getAuthService(): AuthService {
    return this.authService;
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logOut() {
    this.authService.logOut();
  }
}
