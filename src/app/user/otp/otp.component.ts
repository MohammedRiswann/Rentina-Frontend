import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RegisterComponent } from '../signup/signup.component';
import { UserDataService } from '../services/userdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OtpService } from '../services/otp.service';
import { response } from 'express';
import { jwtToken } from '../services/jwt.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  @ViewChild(RegisterComponent) datacomponent!: RegisterComponent;
  otp1: string = '';
  otp2: string = '';
  otp3: string = '';
  otp4: string = '';
  otp5: string = '';
  otp6: string = '';
  error: string = '';
  userType = 'users';

  constructor(
    private http: HttpClient,
    private userDataService: UserDataService,
    private routes: Router,
    private otpService: OtpService,
    private jwtService: jwtToken,
    private activatedRoute: ActivatedRoute
  ) {}

  userdata: any;
  errorr: boolean = false;
  private baseUrl = 'http://localhost:2000';

  ngOnInit(): void {
    // Subscribe to query params (isUsers)
    this.activatedRoute.queryParamMap.subscribe({
      next: (data) => {
        console.log(data);
        if (data.get('isUser') == 'true') {
          this.userType = 'users';
        } else {
          this.userType = 'sellers';
        }
      },
    });

    this.userDataService.userData$.subscribe((data) => {
      console.log(data, 'userdata');

      this.userdata = data;
    });
    console.log(this.userdata);
  }
  // function for autonext in the otp inputs

  autoNext(event: any) {
    const input = event.target;
    const nextInput = event.target.nextElementSibling;
    if (input.value.length === 1 && nextInput) {
      nextInput.focus();
    }
  }

  // verifying the otp

  verifyOTP() {
    console.log(this.userdata, 'user daata');

    const otp = `${this.otp1}${this.otp2}${this.otp3}${this.otp4}${this.otp5}${this.otp6}`;
    console.log(otp);

    this.otpService.verifyOtp(this.userdata, otp, this.userType).subscribe({
      next: (response) => {
        console.log('success');

        if (response.success) {
          localStorage.setItem('type', response.type);
          if (response.type === 'user') {
            console.log('main');

            this.jwtService.setToken(response.token);
            this.routes.navigate(['']);
          } else if (response.type === 'seller') {
            console.log('else');

            localStorage.setItem('type', response.type);
            console.log('otp success in else');
            this.jwtService.setToken(response.token);
            this.routes.navigate(['seller-home']);
          }
        }
      },
      error: (error) => {
        console.log(error);
        this.errorr = true;
      },
    });
  }
}
