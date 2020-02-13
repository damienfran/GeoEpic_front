import { TestBed } from '@angular/core/testing';

import { GetAllClientsService } from './get-all-clients.service';

describe('GetAllClientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllClientsService = TestBed.get(GetAllClientsService);
    expect(service).toBeTruthy();
  });
});
