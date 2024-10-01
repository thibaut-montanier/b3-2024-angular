import { Component, Input } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.scss'
})
export class PlayersListComponent {
  @Input() players: Player[] = [];
}
