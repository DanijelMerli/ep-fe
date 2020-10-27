import { TestBed } from '@angular/core/testing';

import { TournamentListResolverService } from './tournament-list-resolver.service';

describe('TournamentListResolverService', () => {
  let service: TournamentListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournamentListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
