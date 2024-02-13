import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterComponent } from '../signup/signup.component';
import { UserDataService } from '../services/userdata.service';
import { Router } from '@angular/router';
import { OtpService } from '../services/otp.service';
import { response } from 'express';

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

  constructor(
    private http: HttpClient,
    private userDataService: UserDataService,
    private routes: Router,
    private otpService: OtpService
  ) {}

  userdata: any;
  errorr: boolean = false;

  private baseUrl = 'http://localhost:2000';

  ngOnInit(): void {
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

    this.otpService.verifyOtp(this.userdata, otp).subscribe({
      next: (response) => {
        if (response.success) {
          console.log('otp success');
          this.routes.navigate(['']);
        }
      },
      error: (error) => {
        console.log(error);
        this.errorr = true;
      },
    });
  }
}
