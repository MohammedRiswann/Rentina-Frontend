import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class profileService {
  private apiUrl = environment.api;

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
