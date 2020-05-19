import { TestBed } from '@angular/core/testing';

import { AnimalCategoriesService } from './animal-categories.service';

describe('AnimalCategoriesService', () => {
  let service: AnimalCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
