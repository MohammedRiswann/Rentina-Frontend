import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class userloginService {
  private baseUrl = environment.api;

  constructor(private http: HttpClient) {}

  login(phone: string, password: string): Observable<any> {
    console.log({ phone, password });
    return this.http.post(`${this.baseUrl}/users/user-login`, {
      phone,
      password,
    });
  }
}
