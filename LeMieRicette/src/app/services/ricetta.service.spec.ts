import { TestBed } from '@angular/core/testing';

import { RicettaService } from './ricetta.service';

describe('RicettaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RicettaService = TestBed.get(RicettaService);
    expect(service).toBeTruthy();
  });
});
