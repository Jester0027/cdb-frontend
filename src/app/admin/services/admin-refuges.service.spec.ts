import { TestBed } from '@angular/core/testing';

import { AdminRefugesService } from './admin-refuges.service';

describe('AdminRefugesService', () => {
  let service: AdminRefugesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRefugesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
