import { Component, Input } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'app-players-title',
  standalone: true,
  imports: [],
  templateUrl: './players-title.component.html',
  styleUrl: './players-title.component.scss'
})
export class PlayersTitleComponent {
  @Input() actualPlayer: Player | undefined;
}
