import { TestBed } from '@angular/core/testing';

import { TournamentResolverService } from './tournament-resolver.service';

describe('TournamentResolverService', () => {
  let service: TournamentResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
