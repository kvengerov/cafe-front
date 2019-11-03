import {Injectable} from '@angular/core';
import {User} from '../../_models/user/user';
import {AuthData} from '../../_interfaces/authdata';
import {environment} from '../../../environments/environment';
import {IUser} from '../../_interfaces/user';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = environment.apiUrl;
  userLogin = false;

  private AUTH_DATA: AuthData =
    JSON.parse(localStorage.getItem('user_credentials')) || new User();

  constructor(
    private httpClient: HttpClient,
  ) {
    this.authData.token ? this.userLogin = true : this.userLogin = false;
  }

  register(user: User) {
    return this.httpClient.post<IUser>(`${this.apiURL}/api/auth/register`, user);
  }

  login(user: User) {
    return this.httpClient.post<IUser>(`${this.apiURL}/api/auth/login`, user,
      {observe: 'response'}).pipe(
      map(user => {
        this.authData = {
          token: user.body.token,
          uid: user.body.userId,
          username: user.body.username,
        };
      })
    );
  }

  set authData(data: AuthData) {
    this.AUTH_DATA = Object.assign({}, data);
    localStorage.setItem('user_credentials', JSON.stringify(data));
  }

  get authData() {
    return this.AUTH_DATA;
  }

  logout() {
    localStorage.clear();
    this.AUTH_DATA = {token: '', uid: '', username: ''};
  }
}
