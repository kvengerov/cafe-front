import {Component, OnInit} from '@angular/core';
import {StoreService} from '../../../_services/store/store.service';
import {ReviewService} from '../../../_services/review/review.service';

@Component({
  selector: 'app-section-features',
  templateUrl: './section-features.component.html',
  styleUrls: ['./section-features.component.scss']
})
export class SectionFeaturesComponent implements OnInit {

  constructor(
    private storeService: StoreService,
    private reviewService: ReviewService,
  ) {
  }

  stores;
  reviewData;
  choices = [1, 2, 3, 4, 5];

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  };

  ngOnInit() {
    this.loadStores();
    this.loadReviews();

  }

  loadStores() {
    this.storeService.getStores().subscribe(result => {
      this.stores = result['result'];
    });
  }

  loadReviews() {
    this.reviewService.getReviews().subscribe(res => {
      this.reviewData = res['result'];
    });
  }

}
