import { TestBed } from '@angular/core/testing';

import { NgToastStackService } from './ng-toast-stack.service';

describe('NgToastStackService', () => {
  let service: NgToastStackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgToastStackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
