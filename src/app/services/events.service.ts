import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Response } from './../models/response.model';
import { Event } from './../models/events/event.model';
import { PaginatedData } from './../models/paginated-data.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private http: HttpClient) {}

  fetchEvents(page: number = null): Observable<Response<PaginatedData<Event>>> {
    const options = page
      ? { params: new HttpParams().set('page', page.toString()) }
      : {};

    return this.http.get<Response<PaginatedData<Event>>>(
      `${environment.api}/api/events`,
      options
    );
  }

  fetchOneEvent(id: number): Observable<Response<Event>> {
    return this.http.get<Response<Event>>(
      `${environment.api}/api/events/${id}`
    );
  }
}
