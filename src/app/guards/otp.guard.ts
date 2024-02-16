import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../common/services/user.service';
import { UserDataService } from '../common/services/userdata.service';

@Injectable({
  providedIn: 'root',
})
export class otpGuard implements CanActivate {
  constructor(private router: Router, private serv: UserDataService) {}

  canActivate(): boolean {
    if (this.serv.isRegistrationComplited()) {
      return true;
    } else {
      this.router.navigate(['/user-login']);
      return false;
    }
  }
}
