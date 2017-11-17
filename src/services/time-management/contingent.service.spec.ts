import { TestBed, inject } from '@angular/core/testing';

import { ContingentService } from './contingent.service';

describe('ContingentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContingentService]
    });
  });

  it('should be created', inject([ContingentService], (service: ContingentService) => {
    expect(service).toBeTruthy();
  }));
});
