import {Component, Input, OnInit} from '@angular/core';
import {Gif} from "../../interfaces/gifs.interfaces";

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',

})
export class CardComponent implements OnInit {//metodo de angular del ciclo de vida del componente. lo utilizamos para mandar un error cuando el objeto no eta inicializado
  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required')
  }


}
