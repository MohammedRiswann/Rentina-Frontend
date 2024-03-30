import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  private baseUrl = 'http://localhost:2000';

  constructor(private http: HttpClient) {}

  addProduct(productData: any): Observable<any> {
    console.log('hekllo');

    return this.http.post<any>(
      `${this.baseUrl}/sellers/add-products`,
      productData
    );
  }
  addLands(landData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/sellers/add-lands`, landData);
  }
  fetchId(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/sellers/approval-payment/${id}`);
  }
  approvePayment(id: string): Observable<any[]> {
    return this.http.patch<any>(
      `${this.baseUrl}/sellers/approve-Payment/${id}`,
      {}
    );
  }
}
