import { TestBed } from '@angular/core/testing';

import { AdminEventThemesService } from './admin-event-themes.service';

describe('AdminEventThemesService', () => {
  let service: AdminEventThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminEventThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
