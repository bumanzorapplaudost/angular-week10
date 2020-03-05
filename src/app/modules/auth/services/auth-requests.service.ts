import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserData } from '../interfaces/user-data.interface';
import { Observable, of } from 'rxjs';
import { AuthResult } from '../models/auth-result.model';
import { RequestResponse } from '../../shared/models/request-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthRequestsService {
  constructor(private http: HttpClient) {}

  signIn(userLogInData: UserData): Observable<RequestResponse<AuthResult>> {
    if (false) {
      return this.http.post<RequestResponse<AuthResult>>(
        `${environment.backendBaseUrl}users/login`,
        userLogInData
      );
    }
    const userData: RequestResponse<AuthResult> = {
      data: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNjE2MjM5MDIyfQ.jOh9YCEzn6TOmQtOoF1ni6JYeQ4J-y3xmwrMpCX3eCw',
        user: {
          email: 'gbumanzor@outlook.com',
          id: 12321,
          name: 'Gerson Umanzor',
        },
      },
      meta: {
        current_page: 1,
        from: '',
        last_page: 1,
        per_page: 10,
        to: 4,
        total: 80,
      },
    };
    return of(userData);
  }
}
