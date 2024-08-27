import {Component, Input} from '@angular/core';
import {Country} from "../../interfaces/country";
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  // tenemos que inyectar el servicio desde el constructor
  constructor(private countriesService: CountriesService) {
  }

  public searchRegion(term: string): void {

    this.countriesService.searchRegion(term)
      .subscribe(// tenemos que colocar siempre el subscribe para poder hacer la consulta a la api
        countries => {
          this.countries = countries;
        }
      )

  }
}
