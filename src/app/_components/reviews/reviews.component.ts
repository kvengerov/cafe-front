import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../_services/auth/auth.service';
import {CreatePopupService} from '../../_services/create-popup/create-popup.service';
import {EventbusService} from '../../_services/eventbus/eventbus.service';
import {ReviewService} from '../../_services/review/review.service';
import {SigninComponent} from '../auth/signin/signin.component';
import {AddReviewComponent} from './add-review/add-review.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public createPopup: CreatePopupService,
    public eventBusService: EventbusService,
    private reviewService: ReviewService,
  ) {
  }

  ngOnInit() {
    this.loadReviews();
  }

  onCreateLogin() {
    this.createPopup.onCreatePopup(SigninComponent);
  }

  addReview() {
    this.createPopup.onCreatePopup(AddReviewComponent);
  }

  getStoreId(storeId) {
    return store => store.storeId === storeId;
  }

  loadReviews() {
    this.reviewService.getReviews().subscribe(res => {
      this.eventBusService.resultReview(res['result'].filter(this.getStoreId(this.eventBusService.storeId)));
    });
  }
}
