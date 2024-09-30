import { Component, Input, input } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'app-players-table',
  standalone: true,
  imports: [],
  templateUrl: './players-table.component.html',
  styleUrl: './players-table.component.scss'
})
export class PlayersTableComponent {
  @Input() players: Player[] = [];
}
