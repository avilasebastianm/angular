import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-transmisor',
  templateUrl: './trasmisor.component.html',

})
export class TrasmisorComponent {

  // 1 crear un evenemiter con la palabra decorada @output
  @Output()
  public onValue = new EventEmitter<string>(); // indica que se esta enviando un string

  // 4. el emitValue recibe el valor del input y lo emite al componente padre
  emitValue(value: string): void {
    this.onValue.emit(value);
  }

}
