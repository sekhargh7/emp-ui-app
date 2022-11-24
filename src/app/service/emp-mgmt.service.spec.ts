import { TestBed } from '@angular/core/testing';

import { EmpMgmtService } from './emp-mgmt.service';

describe('EmpMgmtService', () => {
  let service: EmpMgmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpMgmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
