import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SellerProfileService {
  private apiUrl = 'http://localhost:2000';

  constructor(private http: HttpClient) {}

  getProfile(userId: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/admin/seller-profile/${userId}`
    );
  }
}
