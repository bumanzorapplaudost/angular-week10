import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const status = !!localStorage.getItem('user');
    if (status) {
      this.router.navigate(['/shop/products']);
    }
    return status;
  }
}
