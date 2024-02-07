import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class userloginService {
  private baseUrl = 'http://192.168.0.189:2000/users/user-login';

  constructor(private http: HttpClient) {}

  login(phone: string, password: string): Observable<any> {
    console.log({ phone, password });
    return this.http.post(`${this.baseUrl}`, { phone, password });
  }
}
