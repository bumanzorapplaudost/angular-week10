import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackbarService } from '../services/snackbar.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackBarService: SnackbarService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((httpError: HttpErrorResponse) => {
        const errorMessage = `Error: ${this.getErrorMessage(httpError)}`;
        this.snackBarService.openSnackBar(errorMessage);
        return throwError(errorMessage);
      })
    );
  }

  getErrorMessage(error: any) {
    if (error.error instanceof ErrorEvent) {
      return error.error.message;
    } else {
      if (error.status === 404) {
        return 'No HTTP resource was found that matches the request URL.';
      } else if (error.status === 401) {
        return 'You are not authorized to perform this action.';
      } else if (error.status === 500) {
        return 'Internal Server Error; Please try again later.';
      }
    }
    return error.error.message && !Array.isArray(error.error.message)
      ? error.error.message
      : 'Something went wrong, please try again later.';
  }
}
