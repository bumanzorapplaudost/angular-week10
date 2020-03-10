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
    return this.http.post<RequestResponse<AuthResult>>(
      `${environment.backendBaseUrl}users/login`,
      { data: userLogInData }
    );
  }
}
