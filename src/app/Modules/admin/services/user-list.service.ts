import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/user-list`);
  }
  getProfile(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/user-profile/${userId}`);
  }
}
