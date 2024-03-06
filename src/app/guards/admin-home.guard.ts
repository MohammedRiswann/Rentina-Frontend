import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthguardAdmin implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const userType = localStorage.getItem('type');
    console.log(userType);

    if (userType === 'admin') {
      return true;
    }
    if (userType === 'seller') {
      this.router.navigate(['/seller/home']);
      return false;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
