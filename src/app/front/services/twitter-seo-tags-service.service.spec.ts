import { TestBed } from '@angular/core/testing';

import { TwitterSeoTagsServiceService } from './twitter-seo-tags-service.service';

describe('TwitterSeoTagsServiceService', () => {
  let service: TwitterSeoTagsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterSeoTagsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
