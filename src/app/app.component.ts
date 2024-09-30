import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from './models/player';
import { PlayersTableComponent } from "./components/players-table/players-table.component";
import { TennisPlayersComponent } from "./components/tennis-players/tennis-players.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, PlayersTableComponent, TennisPlayersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public players: Player[] = [];

  public title = 'TennisPlayer - appli de gestion des joueurs';

  public currentPlayer = new Player();
ilfaitbeau = false;

  public onSubmit(){
    this.players.push(this.currentPlayer);
    this.currentPlayer = new Player();
  }
}

