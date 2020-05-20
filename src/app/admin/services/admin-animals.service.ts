import { switchMap } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';
import { Animal } from './../../models/animals/animal.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAnimalsService {
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

  addAnimal(animal: Animal): Observable<any> {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.post(
          `${environment.api}/api/admin/animals`,
          animal,
          this.requestOptions()
        );
      })
    );
  }

  updateAnimal(id: number, animal: Animal): Observable<any> {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.put(
          `${environment.api}/api/admin/animals/${id}`,
          animal,
          this.requestOptions()
        );
      })
    );
  }

  deleteAnimal(id: number): Observable<any> {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.delete(
          `${environment.api}/api/admin/animals/${id}`,
          this.requestOptions()
        );
      })
    );
  }

  addPictures(animalId: number = null, files: FileList | File[]) {
    const formData: FormData = new FormData();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      formData.append('imageFile_' + i, files[i]);
    }

    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.post(
          `${environment.api}/api/admin/picture/${animalId}`,
          formData,
          this.requestOptions()
        );
      })
    );
  }

  deletePicture(id: number): Observable<any> {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.delete(
          `${environment.api}/api/admin/picture/${id}`,
          this.requestOptions()
        );
      })
    );
  }
}
