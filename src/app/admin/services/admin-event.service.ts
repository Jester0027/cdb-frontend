import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Event } from './../../models/events/event.model';
import { AuthService } from './auth.service';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminEventService {
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

  addEvent(event: Event): Observable<any> {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.post(
          `${environment.api}/api/admin/events`,
          event,
          this.requestOptions()
        );
      })
    );
  }

  updateEvent(id: number, event: Event): Observable<any> {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.put(
          `${environment.api}/api/admin/events/${id}`,
          event,
          this.requestOptions()
        );
      })
    );
  }

  deleteEvent(id: number): Observable<any> {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.delete(
          `${environment.api}/api/admin/events/${id}`,
          this.requestOptions()
        );
      })
    );
  }

  addPicture(id: number, file: File) {
    const formData = new FormData();
    formData.append('event_picture', file);
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.post(
          `${environment.api}/api/admin/event_picture/${id}`,
          formData,
          this.requestOptions()
        );
      })
    );
  }

  deletePicture(id: number) {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.delete(
          `${environment.api}/api/admin/event_picture/${id}`,
          this.requestOptions()
        );
      })
    );
  }
}
