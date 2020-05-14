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

  addEventTheme(theme: EventTheme) {}

  updateEventTheme(id: number, theme: EventTheme) {}

  deleteEventTheme(id: number) {}
}
