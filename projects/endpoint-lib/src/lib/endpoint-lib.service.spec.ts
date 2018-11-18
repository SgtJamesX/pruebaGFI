import { TestBed } from '@angular/core/testing';

import { EndpointLibService } from './endpoint-lib.service';

describe('EndpointLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EndpointLibService = TestBed.get(EndpointLibService);
    expect(service).toBeTruthy();
  });
});
