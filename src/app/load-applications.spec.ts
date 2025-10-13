import { TestBed } from '@angular/core/testing';

import { LoadApplications } from './load-applications';

describe('LoadApplications', () => {
  let service: LoadApplications;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadApplications);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
