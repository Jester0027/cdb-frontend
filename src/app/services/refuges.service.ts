import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment.prod';
import { Refuge } from './../models/animals/refuge.model';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class RefugesService {
  constructor(private http: HttpClient) {}

  fetchRefuges(): Observable<Response<Refuge[]>> {
    return this.http.get<Response<Refuge[]>>(`${environment.api}/api/refuges`);
  }

  fetchOneRefuge(id: number): Observable<Response<Refuge>> {
    return this.http.get<Response<Refuge>>(
      `${environment.api}/api/refuges/${id}`
    );
  }
}
