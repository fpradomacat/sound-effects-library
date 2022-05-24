import { TestBed } from '@angular/core/testing';

import { SoundsLibraryService } from './sounds-library.service';

describe('SoundsLibraryService', () => {
  let service: SoundsLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoundsLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
