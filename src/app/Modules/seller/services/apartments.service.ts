import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  private apiUrl = 'http://localhost:2000';

  constructor(private http: HttpClient) {}

  getApartments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/sellers/apartments-list`);
  }
  deleteApartment(id: string): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/sellers/apartments-list/${id}`
    );
  }
}
