import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class loginSellerService {
  private baseUrl = 'http://localhost:2000';

  constructor(private http: HttpClient) {}

  login(phone: string, password: string): Observable<any> {
    console.log({ phone, password });
    return this.http.post(`${this.baseUrl}/sellers/seller-login`, {
      phone,
      password,
    });
  }
}
