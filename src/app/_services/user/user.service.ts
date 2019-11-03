import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getUser(userId: string) {
    return this.httpClient.get<IUser>(`${this.apiURL}/api/user/${userId}`);
  }
}
