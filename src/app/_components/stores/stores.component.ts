import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from '../../_services/store/store.service';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  @Input() store;
  stores;

  constructor(
    private storeService: StoreService,
  ) {
  }

  ngOnInit() {
    this.storeService.getStores().subscribe(result => {
      this.stores = result['result'];
      // console.log(this.stores = result['result']);
    });
  }

  sortStores() {
    this.storeService.getSortByName().subscribe(result => {
      this.stores = result['result'];
      // console.log(this.stores = result['result']);
    });
  }

  ratingStores() {
    this.storeService.getRating().subscribe(result => {
      this.stores = result['result'];
      // console.log(this.stores = result['result']);
    });
  }
}
