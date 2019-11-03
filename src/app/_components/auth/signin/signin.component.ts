import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../_services/auth/auth.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dialogRef: MatDialogRef<SigninComponent>
  ) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    this.form.disable();
    this.authService.login(this.form.value)
      .subscribe(
        () => {
          this.authService.userLogin = true;
          this.dialogRef.close();
          console.log('login successful');
        },
        error => {
          this.errorMessage = error.error.message;
          this.form.enable();
          if (error.status === 401) {
            this.errorMessage = error.error.message;
          }
        });
  }
}
