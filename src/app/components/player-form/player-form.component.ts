import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './player-form.component.html',
  styleUrl: './player-form.component.scss'
})
export class PlayerFormComponent {
  public currentPlayer = new Player();
  public addPlayer = output<Player>();
  public onSubmit(){
    this.addPlayer.emit(this.currentPlayer);
    this.currentPlayer = new Player();
  }
}
