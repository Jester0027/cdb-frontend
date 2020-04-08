import { TestBed } from '@angular/core/testing';

import { RefugesService } from './refuges.service';

describe('RefugesService', () => {
  let service: RefugesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefugesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
