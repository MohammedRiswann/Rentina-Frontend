import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  private baseUrl = 'http://localhost:2000'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  addProduct(productData: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/sellers/add-products`,
      productData
    );
  }
  addLands(landData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/sellers/add-lands`, landData);
  }
}
