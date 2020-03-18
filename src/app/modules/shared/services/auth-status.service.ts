import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStatusService {
  auth: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private subscription: Subscription;

  constructor() {
    this.auth.next(!!localStorage.getItem('token'));
  }

  get authStatus(): Observable<boolean> {
    return this.auth.asObservable();
  }

  updateStatus(newStatus: boolean): void {
    this.auth.next(newStatus);
  }
}
