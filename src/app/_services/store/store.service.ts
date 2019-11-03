import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Store} from '../../_interfaces/store';
import {debounceTime} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getStores() {
    return this.httpClient.get<Store>(`${this.apiUrl}/api/store`);
  }

  getStore(storeId) {
    return this.httpClient.get<Store>(`${this.apiUrl}/api/store/${storeId}`);
  }

  getSortByName() {
    return this.httpClient.get<Store>(`${this.apiUrl}/api/store?sort=name`);
  }

  getRating() {
    return this.httpClient.get<Store>(`${this.apiUrl}/api/store?sort=-rating`);
  }

  searchStore(name) {
    return this.httpClient.get<Store>(`${this.apiUrl}/api/store/search?name=${name}`).pipe(
      debounceTime(300)
    );
  }
}
