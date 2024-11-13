import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './player-form.component.html',
  styleUrl: './player-form.component.scss'
})
export class PlayerFormComponent  implements OnChanges {

  @Input() editPlayer: Player|undefined;
  public addPlayer = output<Player>();

  public formGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    firstName: new FormControl(''),
    ranking: new FormControl(0, [Validators.required, Validators.min(1)])
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editPlayer'] && this.editPlayer != null){
      // affectation des valeurs de editPlayer au formulaire
      this.formGroup.setValue(this.editPlayer);
    }
  }

  public onNew(){
    // reset des valeurs du formulaire
    this.formGroup.reset();
  }

  public onSubmit(){
    const result = new Player();
    result.name = this.formGroup.value.name!;
    result.firstName = this.formGroup.value.firstName!;
    result.ranking = +this.formGroup.value.ranking!;
    this.addPlayer.emit(result);
  }


  public showFieldError(fieldName: string, errorKind: string = ''): boolean{
    const formControl =this.formGroup.get(fieldName);
    return formControl != null && formControl.touched && !formControl.valid;
  }
  // version avancée de la gestion d'erreur
  // public showFieldError(fieldName: string, errorKind: string = ''): boolean{
  //   if (this.formGroup.get(fieldName)?.touched) {
  //     if (errorKind == ''){
  //       return !this.formGroup.get(fieldName)?.valid;
  //     }else{
  //       return this.formGroup.get(fieldName)?.errors?.[errorKind] != null;
  //     }
  //   }else{
  //     return false;
  //   }
  // }

  getError(fieldName: string){
    return this.formGroup.get(fieldName)?.errors;
  }
}
