import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  private itemsSource = new BehaviorSubject<any>(null);
  items$ = this.itemsSource.asObservable();

  constructor() {}

  emitItems(items: any) {
    this.itemsSource.next(items);
  }
}
