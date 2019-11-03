import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoreService} from '../../../_services/store/store.service';
import {EventbusService} from '../../../_services/eventbus/eventbus.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss']
})
export class StoreDetailComponent implements OnInit {

  store;

  constructor(
    private activatedRoute: ActivatedRoute,
    private storeService: StoreService,
    private eventBusService: EventbusService
  ) {
  }

  ngOnInit() {
    const storeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.eventBusService.resultStoreId(storeId);
    this.storeService.getStore(storeId).subscribe(store => {
      this.store = store['store'];
    });
  }

}
