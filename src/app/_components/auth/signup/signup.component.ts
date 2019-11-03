import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../_services/auth/auth.service';
import {CreatePopupService} from '../../../_services/create-popup/create-popup.service';
import {MatDialogRef} from '@angular/material';
import {SigninComponent} from '../signin/signin.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private createPopup: CreatePopupService,
    private dialogRef: MatDialogRef<SignupComponent>
  ) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register() {
    this.form.disable();
    this.authService.register(this.form.value)
      .subscribe(
        () => {
          console.log('register successful');
          this.dialogRef.close();
          this.createPopup.onCreatePopup(SigninComponent);
        },
        error => {
          this.form.enable();
          this.errorMessage = error.error.message;
        });
  }
}
