import { PaginatedData } from './../models/paginated-data.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';
import { Refuge } from './../models/animals/refuge.model';

@Injectable({
  providedIn: 'root',
})
export class RefugesService {
  constructor(private http: HttpClient) {}

  fetchRefuges(page: number = null): Observable<PaginatedData<Refuge>> {
    const options = page
      ? { params: new HttpParams().set('page', page.toString()) }
      : {};

    return this.http.get<PaginatedData<Refuge>>(
      `${environment.api}/api/refuges`,
      options
    );
  }

  fetchOneRefuge(id: number): Observable<Refuge> {
    return this.http.get<Refuge>(`${environment.api}/api/refuges/${id}`);
  }
}
