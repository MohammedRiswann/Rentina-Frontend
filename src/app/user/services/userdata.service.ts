import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();

  private registrationComplited: boolean = false;
  constructor() {}

  setUserData(data: any) {
    console.log(data);

    this.userDataSubject.next(data);
  }
  isRegistrationComplited() {
    return this.registrationComplited;
  }
}
