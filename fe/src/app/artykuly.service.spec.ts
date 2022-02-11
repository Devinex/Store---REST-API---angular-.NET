import { TestBed } from '@angular/core/testing';

import { ArtykulyService } from './artykuly.service';

describe('ArtykulyService', () => {
  let service: ArtykulyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtykulyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
