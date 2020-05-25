import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Event } from './../../models/events/event.model';
import { environment } from './../../../environments/environment';
import { AbstractCrudService } from './abstract-crud.service';

@Injectable({
  providedIn: 'root',
})
export class AdminEventService extends AbstractCrudService<Event> {
  protected route = 'events';

  addPicture(id: string, file: File) {
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

  deletePicture(id: string) {
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
