import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServotpService {
  private apiUrl = 'http://localhost:2000/users';

  constructor(private http: HttpClient) {}

  verifyOtp(otp: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/verify-otp`, { otp });
  }
}
