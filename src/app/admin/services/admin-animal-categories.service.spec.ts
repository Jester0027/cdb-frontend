import { TestBed } from '@angular/core/testing';

import { AdminAnimalCategoriesService } from './admin-animal-categories.service';

describe('AdminAnimalCategoriesService', () => {
  let service: AdminAnimalCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAnimalCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
