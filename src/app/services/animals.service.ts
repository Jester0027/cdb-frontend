import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { Animal } from './../models/animals/animal.model';
import { PaginatedData } from './../models/paginated-data.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient) {}

  fetchAnimals(
    page: number = null
  ): Observable<PaginatedData<Animal>> {
    const options = page
      ? { params: new HttpParams().set('page', page.toString()) }
      : {};

    return this.http.get<PaginatedData<Animal>>(
      `${environment.api}/api/animals`,
      options
    );
  }

  fetchOneAnimal(id: string): Observable<Animal> {
    return this.http.get<Animal>(
      `${environment.api}/api/animals/${id}`
    );
  }

  fetchOneAnimalFromSlug(slug: string): Observable<Animal> {
    return this.http.get<Animal>(
      `${environment.api}/api/animals/slug/${slug}`
    );
  }
}
