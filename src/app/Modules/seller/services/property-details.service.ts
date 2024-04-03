import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PropertyDetailsService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getPropertyDetails(propertyId: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/sellers/apartments-details/${propertyId}`
    );
  }
  updatePropertyDetails(id: string, updatedDetails: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/properties/${id}`, updatedDetails);
  }
  getLandsDetails(landId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sellers/lands-details/${landId}`);
  }
}
