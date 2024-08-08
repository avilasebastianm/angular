import {Component, EventEmitter, Output} from '@angular/core';
import {Character} from "../../interface/character.interface";
@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  // Esta línea de código crea un mecanismo para que el componente pueda emitir eventos de tipo Character a su componente padre.
  // Cuando ocurra algo relevante en el componente hijo (por ejemplo, la creación de un nuevo personaje),
  // este podrá utilizar el método emit() del EventEmitter para enviar los datos del personaje al componente padre.
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

public character : Character = {
  name: '',
  power: 0
}

emitCharacter(){
  console.log(this.character)

  if(this.character.name.length===0) return;
  //emite el el objeto character
  this.onNewCharacter.emit(this.character);


  this.character = {
    name: '',
    power: 0
  }
}
}
