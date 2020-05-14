import { environment } from './../../../environments/environment';
import { switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Refuge } from './../../models/animals/refuge.model';

@Injectable({
  providedIn: 'root',
})
export class AdminRefugesService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  private requestOptions(options = {}) {
    const token = window.localStorage.getItem('token');
    const headers = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };

    const updatedOptions = { ...headers, ...options };
    return updatedOptions;
  }

  addRefuge(refuge: Refuge) {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.post(
          `${environment.api}/api/admin/refuges`,
          refuge,
          this.requestOptions()
        );
      })
    );
  }

  updateRefuge(id: number, refuge: Refuge) {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.put(
          `${environment.api}/api/admin/refuges/${id}`,
          refuge,
          this.requestOptions()
        );
      })
    );
  }

  deleteRefuge(id: number) {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.delete(
          `${environment.api}/api/admin/refuges/${id}`,
          this.requestOptions()
        );
      })
    );
  }
}
