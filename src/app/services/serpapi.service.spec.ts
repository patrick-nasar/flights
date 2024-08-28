import { TestBed } from '@angular/core/testing';

import { SerpapiService } from './serpapi.service';

describe('SerpapiService', () => {
  let service: SerpapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerpapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
