import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from './models/player';
import { PlayersTableComponent } from "./components/players-table/players-table.component";
import { PlayersListComponent } from './components/players-list/players-list.component';
import { setAlternateWeakRefImpl } from '@angular/core/primitives/signals';
import { PlayersTitleComponent } from "./components/players-title/players-title.component";
import { PlayerFormComponent } from './components/player-form/player-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, PlayersTableComponent, PlayersListComponent, PlayersTitleComponent, PlayerFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public selectedPlayer: Player | undefined;

  onSelectPlayer($event: Player) {
    this.selectedPlayer = $event;
  }

  viewType: string='table';

  public players: Player[] =  [
    {name: 'Doe', firstName: 'John', ranking: 5},
    {name: 'Federer', firstName: 'Roger', ranking: 2},
    {name: 'Djokovic', firstName: 'Novak', ranking: 1},
  ];

  public title = 'TennisPlayer - appli de gestion des joueurs';

  public onSubmit(player: Player){
    this.players.push(player);
    this.selectedPlayer = player;
  }
}

