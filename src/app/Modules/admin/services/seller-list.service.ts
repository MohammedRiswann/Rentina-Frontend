import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SellerListService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getSellers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/seller-list`);
  }
  getPendingSellers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/pending-seller-list`);
  }
}
