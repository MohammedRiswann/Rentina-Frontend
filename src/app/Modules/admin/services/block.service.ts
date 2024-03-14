// block.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlockService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:2000';

  approveUser(sellerId: string): Observable<any[]> {
    return this.http.patch<any>(
      `${this.apiUrl}/admin/approve-seller/${sellerId}`,
      {}
    );
  }
  sendApprovalEmail(sellerId: string): Observable<any> {
    const requestBody = { sellerId };
    return this.http.post<any>(`${this.apiUrl}/admin/send-email`, requestBody);
  }
  toggleSellerBlockStatus(sellerId: string, status: string): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/sellers/block-unblock/${sellerId}`,
      { status }
    );
  }
  toggleUserBlockStatus(userId: string, status: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/admin/block-unblock/${userId}`, {
      status,
    });
  }
}
