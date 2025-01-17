import { TestBed } from '@angular/core/testing';

import { TennisPlayersService } from './tennis-players.service';

describe('TennisPlayersService', () => {
  let service: TennisPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TennisPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
