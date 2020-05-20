import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Event } from './../../models/events/event.model';
import { AuthService } from './auth.service';
import { environment } from './../../../environments/environment';
import { AbstractCrudService } from './abstract-crud.service';

@Injectable({
  providedIn: 'root',
})
export class AdminEventService extends AbstractCrudService<Event> {
  protected route = 'events';

  addPicture(id: number, file: File) {
    const formData = new FormData();
    formData.append('event_picture', file);
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.post(
          `${environment.api}/api/admin/event_picture/${id}`,
          formData,
          this.requestOptions()
        );
      })
    );
  }

  deletePicture(id: number) {
    return this.authService.checkCredentials().pipe(
      switchMap(() => {
        return this.http.delete(
          `${environment.api}/api/admin/event_picture/${id}`,
          this.requestOptions()
        );
      })
    );
  }
}
