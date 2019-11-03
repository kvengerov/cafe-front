import {Component, OnInit} from '@angular/core';
import {EventbusService} from '../../../_services/eventbus/eventbus.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-section-search-result',
  templateUrl: './section-search-result.component.html',
  styleUrls: ['./section-search-result.component.scss']
})
export class SectionSearchResultComponent implements OnInit {

  error = false;
  store;

  constructor(
    public eventBusService: EventbusService,
    private dialogRef: MatDialogRef<SectionSearchResultComponent>
  ) {
  }

  ngOnInit() {
    this.eventBusService.store.subscribe(res => {
      console.log(res);
      if (res === 'Store not found') {
        this.error = true;
        this.store = res;
      } else {
        this.store = res;
      }
    });
  }

  closeWin() {
    this.dialogRef.close();
  }
}
