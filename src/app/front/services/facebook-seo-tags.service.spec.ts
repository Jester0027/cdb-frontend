import { TestBed } from '@angular/core/testing';

import { FacebookSeoTagsService } from './facebook-seo-tags.service';

describe('FacebookSeoTagsService', () => {
  let service: FacebookSeoTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacebookSeoTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
