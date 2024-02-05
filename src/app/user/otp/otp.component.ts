import { HttpClient } from '@angular/common/http';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { RegisterComponent } from '../signup/signup.component';
import { UserDataService } from '../services/userdata.service';
import { Router } from '@angular/router';

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
    private routes: Router
  ) {}

  userdata: any;
  errorr: boolean = false;

  private baseUrl = 'http://localhost:2000/users';

  ngOnInit(): void {
    this.userDataService.userData$.subscribe((data) => {
      console.log(data, 'userdata');

      this.userdata = data;
    });
    console.log(this.userdata);
  }

  verifyOTP() {
    console.log(this.userdata, 'user daata');

    const otp = `${this.otp1}${this.otp2}${this.otp3}${this.otp4}${this.otp5}${this.otp6}`;
    const requestData = {
      ...this.userdata, // Spread operator to include form data
      otp: otp, // Add OTP to the request body
    };
    this.http.post<any>(`${this.baseUrl}/verify-otp`, requestData).subscribe({
      next: (response) => {
        console.log(response);

        if (response.success) {
          console.log('otp success');
          this.routes.navigate(['home']);
        }
      },
      error: (error) => {
        console.log(error);
        this.errorr = true;
      },
    });
  }
}
