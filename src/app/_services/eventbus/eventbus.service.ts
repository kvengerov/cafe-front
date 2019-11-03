import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventbusService {

  store: EventEmitter<any> = new EventEmitter();
  storeId: string;
  reviewData = [];

  resultStore(store) {
    this.store.emit(store);
  }

  resultStoreId(storeId) {
    this.storeId = storeId;
  }

  resultReview(reviewData) {
    this.reviewData = reviewData;
    console.log(this.reviewData);
  }
}
