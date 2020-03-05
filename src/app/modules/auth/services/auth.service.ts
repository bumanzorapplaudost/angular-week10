import { Injectable } from '@angular/core';
import { AuthRequestsService } from './auth-requests.service';
import { map, tap } from 'rxjs/operators';
import { UserData } from '../interfaces/user-data.interface';
import { AuthStatusService } from '../../shared/services/auth-status.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private authRequestService: AuthRequestsService,
    private authStatusService: AuthStatusService
  ) {}

  signIn(userLogInData: UserData) {
    return this.authRequestService.signIn(userLogInData).pipe(
      tap((response) => {
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authStatusService.updateStatus(true);
      }),
      map((response) => response.data)
    );
  }
}
