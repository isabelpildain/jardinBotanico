import { TestBed } from '@angular/core/testing';

import { ParseProviderService } from './parse-provider.service';

describe('ParseProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParseProviderService = TestBed.get(ParseProviderService);
    expect(service).toBeTruthy();
  });
});
