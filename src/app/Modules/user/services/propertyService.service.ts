// property.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:2000';

  searchApartments(
    query: string,
    location: string,
    type: string,
    minPrice?: number,
    maxPrice?: number
  ): Observable<any[]> {
    let url = `${this.apiUrl}/users/search/apartments?query=${query}`;

    if (location) {
      url += `&location=${location}`;
    }

    if (minPrice !== undefined) {
      url += `&minPrice=${minPrice}`;
    }

    if (maxPrice !== undefined) {
      url += `&maxPrice=${maxPrice}`;
    }
    if (type) {
      console.log('hello muthu');

      url += `&type=${type}`;
    }
    return this.http.get<any[]>(url);
  }
  getApartmentDetails(userId: string): Observable<any[]> {
    console.log(userId);

    return this.http.get<any>(
      `${this.apiUrl}/users/apartment-details/${userId}`
    );
  }
  searchLands(
    query: string,
    location: string,
    type: string,
    minPrice?: number,
    maxPrice?: number
  ): Observable<any[]> {
    let url = `${this.apiUrl}/lands/lands-list?query=${query}`;

    if (location) {
      url += `&location=${location}`;
    }

    if (minPrice !== undefined) {
      url += `&minPrice=${minPrice}`;
    }

    if (maxPrice !== undefined) {
      url += `&maxPrice=${maxPrice}`;
    }
    if (type) {
      console.log('hello muthu');

      url += `&type=${type}`;
    }
    console.log('hhhh');

    return this.http.get<any[]>(url);
  }
  getLandDetails(userId: string): Observable<any[]> {
    console.log(userId);

    return this.http.get<any>(`${this.apiUrl}/lands/lands-details/${userId}`);
  }
  submitReview(reviewData: any, id: string): Observable<any> {
    console.log(reviewData);

    return this.http.post(`${this.apiUrl}/reviews/submit`, { reviewData, id });
  }

  getProductReviews(productId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/reviews/products/${productId}`);
  }
}
