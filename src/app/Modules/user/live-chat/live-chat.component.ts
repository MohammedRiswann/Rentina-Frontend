import { Component, OnInit, OnDestroy } from '@angular/core';
import io from 'socket.io-client';
import { Subscription } from 'rxjs';

import { socketService } from 'src/app/common/services/socket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css'],
})
export class LiveChatComponent implements OnInit, OnDestroy {
  newMessage: string = '';
  username: string = '';
  messages: any[] = [];
  apartmentData: any;
  myMessage: any;
  userId: any;
  private socket: any;
  private chatlistSubscription: Subscription | undefined;

  constructor(
    private chatService: socketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((response) => {
      this.apartmentData = response['id'];
      console.log(this.apartmentData);

      this.socket = io('http://localhost:1000');

      this.chatlistSubscription = this.chatService.getMessages().subscribe({
        next: (res) => {
          this.messages = res;
          console.log(this.messages);
        },
        error: (err) => {
          console.log(err);
        },
      });

      this.socket.on('message', (message: any) => {
        console.log(message);
        this.messages.push(message);
      });

      this.userId = this.parseJwt(localStorage.getItem('token'));
    });
  }

  parseJwt(token: any) {
    if (!token) {
      return;
    }
    console.log('TOKEN', token);
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  ngOnDestroy(): void {
    if (this.chatlistSubscription) {
      this.chatlistSubscription.unsubscribe();
    }

    if (this.socket) {
      this.socket.disconnect();
    }
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.chatService.sendMessage(
        this.userId.userId,
        this.apartmentData,
        this.newMessage
      );
      console.log(this.newMessage, this.userId.userId, this.apartmentData);
    }
    this.newMessage = '';
  }
  getMessage() {
    this.chatService.getMessage().subscribe((data) => {
      this.messages.push(data);
      if (data.sender == this.userId.userId) {
        console.log('its meeeee');
        this.myMessage = true;
      } else {
        console.log('its youuuu');
        this.myMessage = false;
      }
    });
  }
}
