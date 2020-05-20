import { environment } from './../../../environments/environment';
import { switchMap } from 'rxjs/operators';
import { EventTheme } from './../../models/events/event-theme.model';
import { AuthService } from './auth.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractCrudService } from './abstract-crud.service';

@Injectable({
  providedIn: 'root',
})
export class AdminEventThemesService extends AbstractCrudService<EventTheme> {
  protected route = 'event_themes';
}
