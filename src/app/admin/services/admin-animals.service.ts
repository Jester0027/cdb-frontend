import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';
import { Animal } from './../../models/animals/animal.model';
import { AbstractCrudService } from './abstract-crud.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAnimalsService extends AbstractCrudService<Animal> {
  protected route = 'animals';

  addPictures(animalId: string = null, files: FileList | File[]) {
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

  deletePicture(id: string): Observable<any> {
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
