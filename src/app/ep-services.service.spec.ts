import { TestBed } from '@angular/core/testing';

import { EpServicesService } from './ep-services.service';

describe('EpServicesService', () => {
  let service: EpServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
