import { TestBed } from '@angular/core/testing';

import { AbstractSeoMetaTagsService } from './abstract-seo-meta-tags.service';

describe('AbstractSeoMetaTagsService', () => {
  let service: AbstractSeoMetaTagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractSeoMetaTagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
