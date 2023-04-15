import { TestBed } from '@angular/core/testing';

import { BusRoutesService } from './bus-routes.service';

describe('RoutesService', () => {
  let service: BusRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
