import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  userDataSubject = new BehaviorSubject<any>(null);

  private registrationComplited: boolean = false;
  constructor() {}

  setUserData(data: number) {
    console.log(data);
    this.userDataSubject.next(data);
  }
  isRegistrationComplited() {
    return this.registrationComplited;
  }
  isRegistrationTrue() {
    return (this.registrationComplited = true);
  }
}
