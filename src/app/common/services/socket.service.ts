// socket.service.ts
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  // private socket: Socket;
  // constructor() {
  //   this.socket = io('http://localhost:');
  // }
  // sendMessage(message: string) {
  //   this.socket.emit('chat message', message);
  // }
  // receiveMessages(): Observable<string> {
  //   return new Observable<string>((observer) => {
  //     this.socket.on('chat message', (message: string) => {
  //       observer.next(message);
  //     });
  //   });
  // }
}
