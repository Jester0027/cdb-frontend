import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { AnimalCategory } from './../models/animals/animal-category.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimalCategoriesService {
  constructor(private http: HttpClient) {}

  fetchCategories(): Observable<AnimalCategory[]> {
    return this.http.get<AnimalCategory[]>(
      `${environment.api}/api/animal_categories`
    );
  }

  fetchOneCategory(id: number): Observable<AnimalCategory> {
    return this.http.get<AnimalCategory>(
      `${environment.api}/api/animal_categories/${id}`
    );
  }
}
