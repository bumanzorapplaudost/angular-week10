import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStatusService {
  auth: BehaviorSubject<boolean> = new BehaviorSubject(true);
  private subscription: Subscription;

  constructor() {
    // select from store to update, for now it will be false by default.
  }

  get authStatus(): Observable<boolean> {
    return this.auth.asObservable();
  }

  updateStatus(newStatus: boolean): void {
    this.auth.next(newStatus);
  }

  unsubscribe(): void {
    this.subscription.unsubscribe();
  }
}
