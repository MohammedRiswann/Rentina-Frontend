import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.api;

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
