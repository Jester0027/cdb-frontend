import { Injectable } from '@angular/core';

import { AnimalCategory } from './../../models/animals/animal-category.model';
import { AbstractCrudService } from './abstract-crud.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAnimalCategoriesService extends AbstractCrudService<AnimalCategory> {
  protected route = 'animal_categories';
}
