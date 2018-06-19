import { TestBed, inject } from '@angular/core/testing';

import { SmsserviceService } from './smsservice.service';

describe('SmsserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmsserviceService]
    });
  });

  it('should be created', inject([SmsserviceService], (service: SmsserviceService) => {
    expect(service).toBeTruthy();
  }));
});
