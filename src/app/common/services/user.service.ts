import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:2000';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    console.log('sinan shaaaaaa');
    console.log(userData);

    return this.http.post(`${this.baseUrl}/users/signup`, userData);
  }
  registerSeller(sellerData: any): Observable<any> {
    console.log('sellerservice');

    return this.http.post(`${this.baseUrl}/sellers/register`, sellerData);
  }
}
