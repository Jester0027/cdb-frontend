import { tap, catchError, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { environment } from './../../../environments/environment';
import { User } from './../../models/user.model';

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
        +localStorage.getItem('expiration') <= Math.round(Date.now() / 1000)
      ) {
        return this.refreshToken();
      }
      token = token ?? window.localStorage.getItem('token');
    }
    return this.postLogin(token).pipe(catchError(() => this.refreshToken()));
  }

  private refreshToken() {
    return this.http
      .post<TokenData>(`${environment.api}/api/token/refresh`, {
        refreshToken: window.localStorage.getItem('refreshToken'),
      })
      .pipe(
        switchMap((res: TokenData) => {
          this.storeData(res);
          return this.postLogin(res.token);
        })
      );
  }

  private postLogin(token: string = window.localStorage.getItem('token')) {
    return this.http
      .post<User>(
        `${environment.api}/api/login`,
        {},
        {
          headers: new HttpHeaders({
            Authorization: `Bearer ${token}`,
          }),
        }
      ).pipe(tap((user: User) => {
        window.localStorage.setItem('userData', JSON.stringify(user));
      }));
  }

  getUser(): User {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(window.localStorage.getItem('userData'));
    }
    return null;
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
    window.localStorage.removeItem('userData');
    this.router.navigate(['/admin', 'login']);
  }

  registerUser(username: string, password: string) {
    const user = { username, password };
  }
}
