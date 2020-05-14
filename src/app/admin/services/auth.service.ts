import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { environment } from './../../../environments/environment';
import { User, UserRoles } from './../../models/user.model';

interface TokenData {
  token: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId
  ) {}

  loginCheck(username: string, password: string): Observable<TokenData> {
    return this.http
      .post<TokenData>(`${environment.api}/api/login_check`, {
        username,
        password,
      })
      .pipe(
        tap((res) => {
          if (res.token && isPlatformBrowser(this.platformId)) {
            this.storeData(res);
          }
        })
      );
  }

  checkCredentials(token: string = null): Observable<User | TokenData> {
    if (isPlatformBrowser(this.platformId)) {
      if (
        localStorage.getItem('expiration') &&
        +localStorage.getItem('expiration') * 1000 <= Date.now()
      ) {
        return this.refreshToken();
      }
      token = token ?? window.localStorage.getItem('token');
    }
    return this.http
      .post<User>(
        `${environment.api}/api/login`,
        {},
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${token}`,
          }),
        }
      );
  }

  private refreshToken() {
    return this.http
      .post<TokenData>(`${environment.api}/api/token/refresh`, {
        refreshToken: window.localStorage.getItem('refreshToken'),
      })
      .pipe(
        tap((res: TokenData) => {
          this.storeData(res);
        })
      );
  }

  private getUserRoles(token: string = null): UserRoles[] {
    const data = token
      ? token.split('.')[1]
      : window.localStorage.getItem('token').split('.')[1];
    const user = JSON.parse(atob(data));
    return user.roles;
  }

  private getExpirationDate(token: string): string {
    const data = token.split('.')[1];
    const user = JSON.parse(atob(data));
    return user.exp + '';
  }

  private storeData(data: TokenData) {
    window.localStorage.setItem('token', data.token);
    window.localStorage.setItem('refreshToken', data.refreshToken);
    window.localStorage.setItem(
      'expiration',
      this.getExpirationDate(data.token)
    );
  }

  logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('refreshToken');
    window.localStorage.removeItem('expiration');
    this.router.navigate(['/admin', 'login']);
  }

  registerUser(username: string, password: string) {
    const user = { username, password };
  }
}
