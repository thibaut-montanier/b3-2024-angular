import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from './models/player';
import { PlayersTableComponent } from "./components/players-table/players-table.component";
import { PlayersListComponent } from './components/players-list/players-list.component';
import { setAlternateWeakRefImpl } from '@angular/core/primitives/signals';
import { PlayersTitleComponent } from "./components/players-title/players-title.component";
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { TennisPlayersService } from './services/tennis-players.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, PlayersTableComponent, PlayersListComponent, PlayersTitleComponent, PlayerFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public selectedPlayer: Player | undefined;

  constructor(private _tennisPlayerService: TennisPlayersService){
    debugger
  }

  onSelectPlayer($event: Player) {
    this.selectedPlayer = $event;
  }

  viewType: string='table';

  public players() {
    return this._tennisPlayerService.get();
  }

  public title = 'TennisPlayer - appli de gestion des joueurs';

  public onSubmit(player: Player){
    this._tennisPlayerService.add(player);
    this.selectedPlayer = player;
  }
}

