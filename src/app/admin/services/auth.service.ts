import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { environment } from './../../../environments/environment';
import { User } from './../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId
  ) {}

  loginCheck(
    username: string,
    password: string
  ): Observable<{ token: string; refreshToken: string }> {
    return this.http
      .post<{ token: string; refreshToken: string }>(
        `${environment.api}/api/login_check`,
        {
          username,
          password,
        }
      )
      .pipe(
        tap((res) => {
          if (res.token && isPlatformBrowser(this.platformId)) {
            window.localStorage.setItem('token', res.token);
          }
        })
      );
  }

  checkCredentials(token: string = null): Observable<User> {
    if (isPlatformBrowser(this.platformId)) {
      token = token ?? window.localStorage.getItem('token');
    }
    return this.http.post<User>(
      `${environment.api}/api/login`,
      {},
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`,
        }),
      }
    );
  }

  logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('credentials');
    this.router.navigate(['/']);
  }

  registerUser(email: string, password: string) {}
}
