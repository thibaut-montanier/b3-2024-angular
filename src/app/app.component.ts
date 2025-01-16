import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PlayersTableComponent } from "./components/players-table/players-table.component";
import { PlayersTitleComponent } from "./components/players-title/players-title.component";
import { Player } from './models/player';
import { TennisPlayersService } from './services/tennis-players.service';
import { BehaviorSubject, Subject, switchMap, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    PlayersTableComponent,
    PlayersListComponent,
    PlayersTitleComponent,
    PlayerFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public selectedPlayer: Player | undefined;
  private _myRefreshObservable  = new BehaviorSubject<number>(1);

  constructor(private _tennisPlayerService: TennisPlayersService){

    this._myRefreshObservable
      .pipe(
        switchMap(()=> {
          return this._tennisPlayerService.get();
        }),
      ).subscribe((value)=>{
        this._playerList = value
    });
  }

  onSelectPlayer($event: Player) {
    this.selectedPlayer = $event;
  }

  viewType: string='table';

  private _playerList: Player[] = [];
  public players() {
    return this._playerList;
  }

  public title = 'TennisPlayer - appli de gestion des joueurs';

  onRefreshList() {
    this._myRefreshObservable.next(1);
  }

  public onSubmit(player: Player){
    if (player.id != undefined && player.id>0){
      alert('faire le put ici');
    } else{
      this._tennisPlayerService.add(player).subscribe(()=>{
        this.onRefreshList();
      });
    }

    this.selectedPlayer = player;
  }
}

