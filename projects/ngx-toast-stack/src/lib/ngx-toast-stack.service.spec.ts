import { TestBed } from '@angular/core/testing';

import { NgxToastStackService } from './ngx-toast-stack.service';

describe('NgxToastStackService', () => {
  let service: NgxToastStackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxToastStackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
