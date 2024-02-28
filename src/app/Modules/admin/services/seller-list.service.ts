import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SellerListService {
  private apiUrl = 'http://localhost:2000';

  constructor(private http: HttpClient) {}

  getSellers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/seller-list`);
  }
  getPendingSellers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/pending-seller-list`);
  }
}
