import { TestBed } from '@angular/core/testing';

import { TitleserviceService } from './titleservice.service';

describe('TitleserviceService', () => {
  let service: TitleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
