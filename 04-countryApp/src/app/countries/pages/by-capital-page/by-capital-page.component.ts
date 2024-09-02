import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CountriesService} from "../../services/countries.service";
import {CountryInterface} from "../../interfaces/country.interface";

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {
  public countries: CountryInterface[] = [];
  public initialValue: string = '';

  // tenemos que inyectar el servicio desde el constructor
  constructor(private countriesService: CountriesService) {
  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
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
