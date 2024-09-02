import {Component} from '@angular/core';
import {CountriesService} from "../../services/countries.service";
import {Country} from "../../interfaces/country";

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];

  // tenemos que inyectar el servicio desde el constructor
  constructor(private countriesService: CountriesService) {
  }

  public isLoading: boolean = false;

  public searchByCapital(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital(term)
      .subscribe(// tenemos que colocar siempre el subscribe para poder hacer la consulta a la api
        countries => {
          this.countries = countries;
          this.isLoading = false;

        }
      )

  }
}
