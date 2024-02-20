import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtToken } from 'src/app/common/services/jwt.service';
import { UserService } from 'src/app/common/services/user.service';
import { UserDataService } from 'src/app/common/services/userdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  registerForm!: FormGroup;
  submitted = false;
  msg: any;
  msgg: any;
  formdata = new FormData();
  selectedfile: File[] = [];

  constructor(
    private fb: FormBuilder,
    private serv: UserService,
    private routes: Router,
    private userData: UserDataService,
    private otpService: UserDataService
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(8)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('clicked');

    this.submitted = true;
    console.log(this.registerForm.value);

    if (this.registerForm.valid) {
      console.log('hello');
      const one = this.registerForm.value;
      console.log(one);

      this.formdata.append('firstName', one.firstName);
      this.formdata.append('lastName', one.lastName);
      this.formdata.append('email', one.email);
      this.formdata.append('phone', one.phone);
      this.formdata.append('password', one.password);
      this.formdata.append('confirmPassword', one.confirmPassword);

      for (const data of this.selectedfile) {
        this.formdata.append('files', data);
      }

      this.serv.registerSeller(this.formdata).subscribe({
        next: (response) => {
          if (response.success) {
            console.log('successful reponse');
            const token = response.token;
            localStorage.setItem('token', token);

            this.otpService.isRegistrationTrue();
            this.otpService.setUserData(this.registerForm.value);

            this.routes.navigate(['otp-verification'], {
              queryParams: { isUser: false },
            });
          }
        },
        error: (error) => {
          this.msgg = error.error.message;
        },
      });
    }

    this.formdata = new FormData();
  }

  onFileSelected(event: any) {
    console.log(this.selectedfile.length);

    if (this.selectedfile.length < 1) {
      if (event.target.files.length > 0) {
        this.selectedfile.push(event.target.files[0]);
        console.log(this.selectedfile);
      }
    } else {
      alert('only one file u can choose');
    }
  }
}
