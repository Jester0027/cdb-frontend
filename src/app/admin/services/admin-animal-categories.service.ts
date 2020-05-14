import { switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { environment } from './../../../environments/environment';
import { AnimalCategory } from './../../models/animals/animal-category.model';

@Injectable({
  providedIn: 'root',
})
export class AdminAnimalCategoriesService {
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

  addCategory(category: AnimalCategory): Observable<any> {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.post(
          `${environment.api}/api/admin/animal_categories`,
          category,
          this.requestOptions()
        );
      })
    );
  }

  updateCategory(id: number, category: AnimalCategory): Observable<any> {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.put(
          `${environment.api}/api/admin/animal_categories/${id}`,
          category,
          this.requestOptions()
        );
      })
    );
  }

  deleteCategory(id: number): Observable<any> {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.delete(
          `${environment.api}/api/admin/animal_categories/${id}`,
          this.requestOptions()
        );
      })
    );
  }
}
