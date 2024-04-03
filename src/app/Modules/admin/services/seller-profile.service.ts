import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SellerProfileService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getProfile(userId: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/admin/seller-profile/${userId}`
    );
  }
}
