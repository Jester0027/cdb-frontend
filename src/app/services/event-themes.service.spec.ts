import { TestBed } from '@angular/core/testing';

import { EventThemesService } from './event-themes.service';

describe('EventThemesService', () => {
  let service: EventThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
