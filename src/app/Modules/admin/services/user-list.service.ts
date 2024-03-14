import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  private apiUrl = 'http://localhost:2000';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/user-list`);
  }
  getProfile(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/user-profile/${userId}`);
  }
}
