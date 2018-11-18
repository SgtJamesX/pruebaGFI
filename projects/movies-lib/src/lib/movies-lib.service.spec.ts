import { TestBed } from '@angular/core/testing';

import { MoviesLibService } from './movies-lib.service';

describe('MoviesLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesLibService = TestBed.get(MoviesLibService);
    expect(service).toBeTruthy();
  });
});
