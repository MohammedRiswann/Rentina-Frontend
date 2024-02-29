import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { RegisterComponent } from '../../Modules/user/component/signup/signup.component';
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
  loading = false;

  constructor(
    private userDataService: UserDataService,
    private routes: Router,
    private otpService: OtpService,
    private jwtService: jwtToken,
    private activatedRoute: ActivatedRoute
  ) {}
  sellermsg: string = '';
  userdata: any;
  errorr: boolean = false;

  ngOnInit(): void {
    // Subscribe to query params (isUsers)
    this.activatedRoute.queryParamMap.subscribe({
      next: (data) => {
        if (data.get('isUser') == 'true') {
          this.userType = 'users';
        } else {
          this.userType = 'sellers';
        }
      },
    });

    this.userDataService.userDataSubject.subscribe((data) => {
      this.userdata = data;
    });
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
    this.loading = true;

    const otp = `${this.otp1}${this.otp2}${this.otp3}${this.otp4}${this.otp5}${this.otp6}`;

    this.otpService.verifyOtp(this.userdata, otp, this.userType).subscribe({
      next: (response) => {
        if (response.success) {
          localStorage.setItem('type', response.type);
          if (response.type === 'user') {
            this.jwtService.setToken(response.token);
            this.routes.navigate(['']);
          } else if (response.type === 'seller') {
            localStorage.setItem('type', response.type);
            this.loading = false;
            confirm(
              "OTP verification completed Successfully , By this you will be redirected to login page . After Admin's careful approval you will get email notification."
            );

            this.routes.navigate(['/seller/login']);
          }
        }
      },
      error: (error) => {
        console.log(error);
        this.loading = false;
        this.errorr = true;
      },
    });
  }
}
