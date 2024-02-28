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
}
