import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TennisPlayersService {

  public constructor(private _httpClient: HttpClient){
  }

  public get(){
    return this._httpClient.get<Player[]>('/api/player');
  }

  public add(tennisPlayer: Player){
    return this._httpClient.post('/api/player', tennisPlayer);
  }

  public put(tennisPlayer: Player){
    return this._httpClient.put('/api/player/' + tennisPlayer.id, tennisPlayer);
  }
}
