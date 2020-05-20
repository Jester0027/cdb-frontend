import { Injectable } from '@angular/core';

import { Refuge } from './../../models/animals/refuge.model';
import { AbstractCrudService } from './abstract-crud.service';

@Injectable({
  providedIn: 'root',
})
export class AdminRefugesService extends AbstractCrudService<Refuge> {
  protected route = 'refuges';
}
