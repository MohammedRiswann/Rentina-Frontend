import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class profileService {
  private apiUrl = 'http://localhost:2000';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/sellers/profile`);
  }

  addProfile(profileData: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/sellers/add-profile`,
      profileData
    );
  }
}
