import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import * as lodash from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformObjectInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((response: HttpEvent<any>) => {
        if (response instanceof HttpResponse) {
          const camelCaseObject = this.objectKeysToCamelCase(response.body);
          const modifiedEvent = response.clone({ body: camelCaseObject });
          return modifiedEvent;
        }
        return response;
      })
    );
  }

  objectKeysToCamelCase(snakeCaseObject: any) {
    const camelCaseObject = {};
    lodash.forEach(snakeCaseObject, (value, key) => {
      if (lodash.isPlainObject(value)) {
        value = this.objectKeysToCamelCase(value);
      }
      if (Array.isArray(value)) {
        value.map((val) => this.objectKeysToCamelCase(val));
      }
      camelCaseObject[lodash.camelCase(key)] = value;
    });
    return camelCaseObject;
  }
}
