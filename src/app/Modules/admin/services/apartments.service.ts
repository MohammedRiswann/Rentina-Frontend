import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApartmentsService {
  private apiUrl = environment.api;

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
  deleteApartment(apartmentId: string) {
    return this.http.get<any[]>(
      `${this.apiUrl}/admin/delete-apartment/${apartmentId}`
    );
  }
  deleteLands(landId: string): Observable<any[]> {
    return this.http.delete<any>(`${this.apiUrl}/admin/delete-land/${landId}`);
  }
}
