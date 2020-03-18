import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { forEach, isPlainObject, camelCase } from 'lodash';

@Injectable()
export class TransformObjectInterceptor implements HttpInterceptor {
  objectKeysToCamelCase(objectToConvert: any) {
    const camelCaseObject = {};
    forEach(objectToConvert, (value, key) => {
      if (isPlainObject(value)) {
        value = this.objectKeysToCamelCase(value);
      } else if (Array.isArray(value)) {
        value = value.map((mappedValue) =>
          this.objectKeysToCamelCase(mappedValue)
        );
      }
      camelCaseObject[camelCase(key)] = value;
    });
    return camelCaseObject;
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((response: HttpEvent<any>) => {
        if (response instanceof HttpResponse) {
          return response.clone({
            body: this.objectKeysToCamelCase(response.body),
          });
        }
        return response;
      })
    );
  }
}
