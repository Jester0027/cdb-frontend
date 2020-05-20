import { Injectable } from '@angular/core';

import { EventTheme } from './../../models/events/event-theme.model';
import { AbstractCrudService } from './abstract-crud.service';

@Injectable({
  providedIn: 'root',
})
export class AdminEventThemesService extends AbstractCrudService<EventTheme> {
  protected route = 'event_themes';
}
