import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../_services/auth/auth.service';
import {MatDialogRef} from '@angular/material';
import {ReviewService} from '../../../_services/review/review.service';
import {EventbusService} from '../../../_services/eventbus/eventbus.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  form: FormGroup;
  check = false;
  author: string;
  rating: number;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private dialogRef: MatDialogRef<AddReviewComponent>,
    private reviewService: ReviewService,
    private eventBusService: EventbusService,
  ) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      rating: ['', Validators.required],
    });
  }

  checkboxValidation(e) {
    this.check = e.target.checked;
  }

  checkedRating(e) {
    const target = e.target;
    this.rating = target.value;
  }

  sendReview() {

    const review = {
      storeId: this.eventBusService.storeId,
      title: this.form.controls.title.value,
      text: this.form.controls.text.value,
      authorId: this.authService.authData.uid,
      authorName: this.authService.authData.username,
      rating: this.rating,
    };
    // console.log(review);
    if (((review.storeId || review.title || review.text || review.authorId || review.authorName || review.rating) !== '') && this.check) {
      this.form.disable();
      this.reviewService.postReview(review)
        .subscribe(
          () => {
            this.errorMessage = '';
            console.log('review added');
            this.dialogRef.close();
          },
          error => {
            this.form.enable();
            this.errorMessage = error.error.message;
          });
    } else {
      this.errorMessage = 'Не все поля заполнены';
    }
  }
}
