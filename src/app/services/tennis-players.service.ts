import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TennisPlayersService {
  private _PlayerList: Player[] = [
    {name: 'Doe', firstName: 'John', ranking: 5},
    {name: 'Federer', firstName: 'Roger', ranking: 2},
    {name: 'Djokovic', firstName: 'Novak', ranking: 1},
  ];

  public get(){
    return [...this._PlayerList];
  }

  public add(tennisPlayer: Player){
    this._PlayerList = [...this._PlayerList, tennisPlayer];
  }
}
