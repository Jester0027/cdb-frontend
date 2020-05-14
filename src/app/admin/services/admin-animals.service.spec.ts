import { TestBed } from '@angular/core/testing';

import { AdminAnimalsService } from './admin-animals.service';

describe('AdminAnimalsService', () => {
  let service: AdminAnimalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAnimalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
