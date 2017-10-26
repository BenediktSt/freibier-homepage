import { TestBed, inject } from '@angular/core/testing';

import { MagicCardParserService } from './magic-card-parser.service';

describe('MagicCardParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagicCardParserService]
    });
  });

  it('should be created', inject([MagicCardParserService], (service: MagicCardParserService) => {
    expect(service).toBeTruthy();
  }));
});
