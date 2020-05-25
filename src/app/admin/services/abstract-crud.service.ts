import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export abstract class AbstractCrudService<T> {
  protected abstract route: string;

  constructor(protected authService: AuthService, protected http: HttpClient) {}

  protected requestOptions(options = {}) {
    const token = window.localStorage.getItem('token');
    const headers = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };

    const updatedOptions = { ...headers, ...options };
    return updatedOptions;
  }

  add(item: T): Observable<any> {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.post(
          `${environment.api}/api/admin/${this.route}`,
          item,
          this.requestOptions()
        );
      })
    );
  }

  update(id: string, item: T): Observable<any> {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.put(
          `${environment.api}/api/admin/${this.route}/${id}`,
          item,
          this.requestOptions()
        );
      })
    );
  }

  delete(id: string): Observable<any> {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.delete(
          `${environment.api}/api/admin/${this.route}/${id}`,
          this.requestOptions()
        );
      })
    );
  }
}
