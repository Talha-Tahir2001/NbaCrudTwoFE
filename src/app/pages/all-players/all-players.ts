import { Component, inject } from '@angular/core';
import { PlayerService } from '../../services/player-api';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './all-players.html',
  styleUrl: './all-players.css'
})
export class Player {
  playerService = inject(PlayerService).playerResource;

  
}
