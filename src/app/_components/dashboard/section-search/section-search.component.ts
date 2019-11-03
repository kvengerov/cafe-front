import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StoreService} from '../../../_services/store/store.service';
import {EventbusService} from '../../../_services/eventbus/eventbus.service';
import {CreatePopupService} from '../../../_services/create-popup/create-popup.service';
import {SectionSearchResultComponent} from '../section-search-result/section-search-result.component';

@Component({
  selector: 'app-section-search',
  templateUrl: './section-search.component.html',
  styleUrls: ['./section-search.component.scss']
})
export class SectionSearchComponent implements OnInit {

  form: FormGroup;

  constructor(
    private storeService: StoreService,
    private formBuilder: FormBuilder,
    private eventBus: EventbusService,
    private createPopup: CreatePopupService,
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['']
    });
  }

  searchStore() {
    this.storeService.searchStore(this.form.controls.name.value).subscribe(result => {
      this.eventBus.resultStore(result['result']);
    }, error => {
      if (error.status === 404) {
        this.eventBus.resultStore(error.error.message);
      }
    });
    this.createPopup.onCreatePopup(SectionSearchResultComponent);
  }

}
