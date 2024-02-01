import { TestBed } from '@angular/core/testing';

import { ApiServotpService } from './api-servotp.service';

describe('ApiServotpService', () => {
  let service: ApiServotpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServotpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
