import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from './models/player';
import { PlayersTableComponent } from "./components/players-table/players-table.component";
import { PlayersListComponent } from './components/players-list/players-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, PlayersTableComponent, PlayersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  onOver($event: string) {
    alert($event  + 'depuis app component');
  }
  viewType: string='table';

  public players: Player[] =  [
    {name: 'Doe', firstName: 'John', ranking: 5},
    {name: 'Federer', firstName: 'Roger', ranking: 2},
    {name: 'Djokovic', firstName: 'Novak', ranking: 1},
  ];

  public title = 'TennisPlayer - appli de gestion des joueurs';

  public currentPlayer = new Player();

  public onSubmit(){
    this.players.push(this.currentPlayer);
    this.currentPlayer = new Player();
  }
}

