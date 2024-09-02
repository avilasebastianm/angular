import {Component, Input} from '@angular/core';
import {CountryInterface} from "../../interfaces/country.interface";

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',

})
export class CountryTableComponent {

//como vamos a necesitar importar los paises colocamos el input
  @Input()
  public countries: CountryInterface[] = [];
}
