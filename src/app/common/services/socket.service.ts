import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class socketService {
  constructor(private http: HttpClient, private router: Router) {}

  socket = io(environment.socket);

  private baseUrl = environment.api;

  sendMessage(sender: any, reciever: string, message: string) {
    console.log('sendMessage: ', message);
    this.socket.emit('message', { sender, reciever, message });
  }

  getMessages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/chat/usermessages`);
  }

  getsingleusrchat(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/chat/getsingleusrchat/${data}`);
  }
  getMessage(): Observable<any> {
    return new Observable<any>((observer) => {
      this.socket.on('message-broadcast', (data: any) => {
        observer.next(data);
      });
    });
  }
}
