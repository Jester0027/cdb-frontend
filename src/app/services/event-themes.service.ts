import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { EventTheme } from './../models/events/event-theme.model';

@Injectable({
  providedIn: 'root',
})
export class EventThemesService {
  constructor(private http: HttpClient) {}

  fetchEventThemes(): Observable<EventTheme[]> {
    return this.http.get<EventTheme[]>(`${environment.api}/api/event_themes`);
  }

  fetchOneEventTheme(id: string): Observable<EventTheme> {
    return this.http.get<EventTheme>(
      `${environment.api}/api/event_themes/${id}`
    );
  }

  fetchOneEventThemeFromSlug(slug: string): Observable<EventTheme> {
    return this.http.get<EventTheme>(
      `${environment.api}/api/event_themes/slug/${slug}`
    );
  }
}
