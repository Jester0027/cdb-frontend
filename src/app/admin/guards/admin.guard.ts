import { map, take, catchError } from 'rxjs/operators';
import { AuthService } from './../services/auth.service';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate, CanActivateChild {
  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const loginPage = this.router.createUrlTree(['/admin', 'login']);
    if (isPlatformBrowser(this.platformId)) {
      return this.authService.checkCredentials().pipe(
        take(1),
        map(() => true),
        catchError(() => of(loginPage))
      );
    } else {
      return loginPage;
    }
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
}
