import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from 'express';
import { ApiServotpService } from '../api-servotp.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent {
  otp: string = '';
  constructor(private router: Router, private service: ApiServotpService) {}
  verifyOTP() {
    this.service.verifyOtp(this.otp).subscribe((response) => {
      console.log(response);
    });
  }
}
