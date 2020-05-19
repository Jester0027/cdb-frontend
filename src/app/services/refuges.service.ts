import { PaginatedData } from './../models/paginated-data.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';
import { Refuge } from './../models/animals/refuge.model';

@Injectable({
  providedIn: 'root',
})
export class RefugesService {
  constructor(private http: HttpClient) {}

  fetchRefuges(): Observable<PaginatedData<Refuge>> {
    return this.http.get<PaginatedData<Refuge>>(`${environment.api}/api/refuges`);
  }

  fetchOneRefuge(id: number): Observable<Refuge> {
    return this.http.get<Refuge>(
      `${environment.api}/api/refuges/${id}`
    );
  }
}
