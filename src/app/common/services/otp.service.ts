import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OtpService {
  private baseUrl = 'http://localhost:2000';
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