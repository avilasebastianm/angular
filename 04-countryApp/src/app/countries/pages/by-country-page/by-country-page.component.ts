import {Component, Input} from '@angular/core';
import {Country} from "../../interfaces/country";
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public countries: Country[] = [];

  // tenemos que inyectar el servicio desde el constructor
  constructor(private countriesService: CountriesService) {
  }

  public searchCountry(term: string): void {

    this.countriesService.searchCountry(term)
      .subscribe(// tenemos que colocar siempre el subscribe para poder hacer la consulta a la api
        countries => {
          this.countries = countries;
        }
      )

  }
}
