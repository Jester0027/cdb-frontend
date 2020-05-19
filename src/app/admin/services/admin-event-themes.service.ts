import { environment } from './../../../environments/environment';
import { switchMap } from 'rxjs/operators';
import { EventTheme } from './../../models/events/event-theme.model';
import { AuthService } from './auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminEventThemesService {
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

  addEventTheme(theme: EventTheme) {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.post(
          `${environment.api}/api/admin/event_themes`,
          theme,
          this.requestOptions()
        );
      })
    );
  }

  updateEventTheme(id: number, theme: EventTheme) {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.put(
          `${environment.api}/api/admin/event_themes/${id}`,
          theme,
          this.requestOptions()
        );
      })
    );
  }

  deleteEventTheme(id: number) {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.delete(
          `${environment.api}/api/admin/event_themes/${id}`,
          this.requestOptions()
        );
      })
    );
  }
}
