import { Component, Input,  output } from '@angular/core';
import { Player } from '../../models/player';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-players-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './players-table.component.html',
  styleUrl: './players-table.component.scss'
})
export class PlayersTableComponent {
  @Input() players: Player[] =[];

  clickPlayer = output<Player>();

  onPlayerClic(current: Player){
    this.clickPlayer.emit(current);
  }

}
