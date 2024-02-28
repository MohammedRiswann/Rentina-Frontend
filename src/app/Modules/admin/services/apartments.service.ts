import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApartmentsService {
  private apiUrl = 'http://localhost:2000';

  constructor(private http: HttpClient) {}

  getApartments(userId: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/admin/apartments-list/${userId}`
    );
  }
  getLands(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/lands-list/${userId}`);
  }
  viewApartmentDetails(apartmentId: string) {
    return this.http.get<any[]>(
      `${this.apiUrl}/admin/apartments-details/${apartmentId}`
    );
  }
  viewLandsDetails(landId: string) {
    return this.http.get<any[]>(`${this.apiUrl}/admin/land-details/${landId}`);
  }
}
