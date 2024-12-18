import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TennisPlayersService {
  private _PlayerList: Player[] = [
    {name: 'Doe', firstName: 'John', ranking: 5},
    {name: 'Federer', firstName: 'Roger', ranking: 2},
    {name: 'Djokovic', firstName: 'Novak', ranking: 1},
  ];

  public constructor(private _httpClient: HttpClient){
  }

  public get(){
    return this._httpClient.get<Player[]>('api/player');
  }

  public add(tennisPlayer: Player){
    return this._httpClient.post('/api/player', tennisPlayer);
  }
}
