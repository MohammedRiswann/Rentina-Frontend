import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtToken } from 'src/app/user/services/jwt.service';
import { UserService } from 'src/app/user/services/user.service';
import { UserDataService } from 'src/app/user/services/userdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  registerForm: FormGroup;
  submitted = false;
  msg: any;
  msgg: any;
  formData = new FormData();

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private routes: Router,
    private userData: UserDataService,
    private token: jwtToken
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

      const formData = {
        firstName: this.registerForm.get('firstName')?.value,
        lastName: this.registerForm.get('lastName')?.value,
        email: this.registerForm.get('email')?.value,
        phone: this.registerForm.get('phone')?.value,
        password: this.registerForm.get('password')?.value,
        confirmPassword: this.registerForm.get('confirmPassword')?.value,
        // idProofPhoto: this.registerForm.get('idProofPhoto')?.value, // This should be a file
      };

      // Submit form data to register user
      this.service.registerSeller(formData).subscribe({
        next: (response) => {
          console.log('hellooow');

          if (response.success) {
            console.log('shaheer');

            // Store user data in local storage or service for use in OTP verification
            this.token.setToken(response.token);
            this.userData.setUserData(this.registerForm.value);
            this.routes.navigate(['otp-verification']);
          }
        },
        error: (error) => {
          this.msgg = error.error.message;
        },
      });
    }
  }

  // Method to handle photo selection
  // onFileSelected(event: any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     console.log(file);
  //     this.formData.append('file', file);
  //   }
  // }
}
