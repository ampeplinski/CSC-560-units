import { TestBed } from '@angular/core/testing';

import { TourcyclistsService } from './tourcyclists.service';

describe('TourcyclistsService', () => {
  let service: TourcyclistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourcyclistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
