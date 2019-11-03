import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Review} from '../../_interfaces/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getReviews() {
    return this.httpClient.get<Review>(`${this.apiUrl}/api/review?sort=-created`);
  }

  postReview(review: Review) {
    return this.httpClient.post<Review>(`${this.apiUrl}/api/review`, review);
  }
}
