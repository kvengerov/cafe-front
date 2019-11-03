import {Component, OnInit} from '@angular/core';
import {CreatePopupService} from '../../_services/create-popup/create-popup.service';
import {AuthService} from '../../_services/auth/auth.service';
import {SigninComponent} from '../auth/signin/signin.component';
import {SignupComponent} from '../auth/signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public createPopup: CreatePopupService,
    public authService: AuthService,
  ) {
  }

  onCreateLogin() {
    this.createPopup.onCreatePopup(SigninComponent);
  }

  onCreateRegister() {
    this.createPopup.onCreatePopup(SignupComponent);
  }

  logout() {
    this.authService.userLogin = false;
    this.authService.logout();
    console.log('logout successful');
  }

}
