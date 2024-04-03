import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  @Input()
  message!: string;

  constructor() {}
}
