import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {
  constructor(protected authService: AuthService, protected http: HttpClient) {
  }

  private static requestOptions(options = {}) {
    const token = window.localStorage.getItem('token');
    const headers = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${ token }`,
      }),
    };

    return {...headers, ...options};
  }

  public fetch() {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.get(
          `${ environment.api }/api/admin/users`,
          AdminUsersService.requestOptions()
        );
      })
    );
  }

  public add(email: string) {
    const data = { username: email };
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.post(
          `${ environment.api }/api/admin/register`,
          data,
          AdminUsersService.requestOptions()
        );
      })
    );
  }

  public delete(id: string) {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.delete(
          `${environment.api}/api/admin/users/${id}`,
          AdminUsersService.requestOptions()
        );
      })
    );
  }
}
