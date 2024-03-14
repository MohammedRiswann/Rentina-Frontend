import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userType: string | null = null;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.userType = localStorage.getItem('type');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
