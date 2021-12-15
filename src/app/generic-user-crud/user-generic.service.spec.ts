import { TestBed } from '@angular/core/testing';

import { UserGenericService } from './user-generic.service';

describe('UserGenericService', () => {
  let service: UserGenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
