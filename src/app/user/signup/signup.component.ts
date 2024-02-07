import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserDataService } from '../services/userdata.service';
import { jwtToken } from '../services/jwt.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  submitted = false;

  msg: any;
  msgg: any;
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
      password: [
        '',
        [Validators.required, Validators.minLength(8)],
        Validators.pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        ),
      ],
      confirmPassword: ['', [Validators.required, Validators.required]],
    });
  }
  onSubmit() {
    // Submit the form data to your backend service
    this.submitted = true;
    console.log('muneeeee');
    console.log(this.submitted);

    this.service.registerUser(this.registerForm.value).subscribe({
      next: (response) => {
        console.log('sudais');
        console.log(response);

        if (response.success) {
          console.log(response.message);

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
