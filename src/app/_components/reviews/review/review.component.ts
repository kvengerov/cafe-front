import {Component, Input} from '@angular/core';
import {EventbusService} from '../../../_services/eventbus/eventbus.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  @Input() review;

  choices = [1, 2, 3, 4, 5];

  constructor(
    public eventBusService: EventbusService,
  ) {
  }

}
