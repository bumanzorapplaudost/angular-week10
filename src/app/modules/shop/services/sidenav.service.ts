import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  sidenavStatus = new BehaviorSubject<boolean>(true);

  constructor() {}

  get sidenavStatus$() {
    return this.sidenavStatus.asObservable();
  }

  toggleSidenav() {
    console.log('toggle sidenav');
    console.log(this.sidenavStatus.value);
    this.sidenavStatus.next(!this.sidenavStatus.value);
  }
}
