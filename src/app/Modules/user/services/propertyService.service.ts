// property.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.api;

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
  getApartmentDetails(userId: string): Observable<any> {
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
  submitReport(reportData: string, id: string) {
    return this.http.post<any>(`${this.apiUrl}/reviews/report`, {
      reportData,
      id,
    });
  }
  addToWishlist(productId: string): Observable<any> {
    console.log(productId);

    return this.http.post<any>(`${this.apiUrl}/wishlist/add`, { productId });
  }

  removeFromWishlist(productId: string): Observable<any> {
    console.log(productId);

    return this.http.post<any>(`${this.apiUrl}/wishlist/remove`, { productId });
  }

  isInWishlist(productId: string): Observable<any> {
    return this.http.get<boolean>(`${this.apiUrl}/wishlist/check/${productId}`);
  }
  getWishlistItems(): Observable<any> {
    return this.http.get<boolean>(`${this.apiUrl}/wishlist/get-wishlist`);
  }
  uploadId(sellerData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/upload-id`, sellerData);
  }
  getApproved(id: string): Observable<any> {
    return this.http.get<boolean>(
      `${this.apiUrl}/users/get-payment-approved/${id}`
    );
  }
  getPending(id: string): Observable<any> {
    console.log('hello');

    return this.http.get<boolean>(
      `${this.apiUrl}/users/get-payment-pending/${id}`
    );
  }
}
