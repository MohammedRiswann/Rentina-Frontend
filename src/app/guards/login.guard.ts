import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class loginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('type');

    if (!token) {
      return true;
    } else {
      if (role === 'user') {
        this.router.navigate(['']);
      } else if (role === 'seller') {
        this.router.navigate(['/seller/home']);
      } else if (role === 'admin') {
        this.router.navigate(['/admin/home']);
      } else {
        console.error('Unknown role');
      }

      // Prevent access to the route
      return false;
    }
  }
}
