import { TestBed } from '@angular/core/testing';

import { Player } from './player-api';

describe('Player', () => {
  let service: Player;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Player);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
