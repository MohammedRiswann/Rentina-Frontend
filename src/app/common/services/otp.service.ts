import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class OtpService {
  private baseUrl = environment.api;
  constructor(private http: HttpClient) {}

  verifyOtp(userData: any, otp: string, userType = 'users') {
    const requestData = {
      ...userData,
      otp: otp,
    };
    return this.http.post<any>(
      `${this.baseUrl}/${userType}/verify-otp`,
      requestData
    );
  }
}
