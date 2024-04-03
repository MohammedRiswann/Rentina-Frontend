import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getApartments(userId: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/sellers/apartments-list/${userId}`
    );
  }
  deleteApartment(id: string): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/sellers/apartments-list/${id}`
    );
  }
  getLand(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/sellers/lands-list/${userId}`);
  }
  deleteLand(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/sellers/lands-delete/${id}`);
  }
}
