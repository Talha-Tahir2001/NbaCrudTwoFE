import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Player } from '../Models/Player-Model';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { CreatePlayerDto } from '../DTOs/Create-Player-Dto';
import { UpdatePlayerDto } from '../DTOs/Update-Player-Dto';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private apiUrl: string = environment.apiUrl;
  private resourceUrl: string = 'Player';
  private playerHttp = inject(HttpClient);

  // GET
  playerResource = httpResource<Player[]>(
    () => `${this.apiUrl}${this.resourceUrl}`
  );

  // POST
  addPlayer(player: CreatePlayerDto): Observable<Player> {
    return this.playerHttp.post<Player>(
      `${this.apiUrl}${this.resourceUrl}`,
      player
    );
  }

  // PUT
  updatePlayer(id: number, player: UpdatePlayerDto): Observable<Player> {
    return this.playerHttp.put<Player>(
      `${this.apiUrl}${this.resourceUrl}/${id}`,
      player
    );
  }

  // DELETE
  deletePlayer(id: number): Observable<void> {
    return this.playerHttp.delete<void>(
      `${this.apiUrl}${this.resourceUrl}/${id}`
    );
  }
}
