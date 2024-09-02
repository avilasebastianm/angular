import {Component, Input, OnInit} from '@angular/core';
import {CountryInterface} from "../../interfaces/country.interface";
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {
  public countries: CountryInterface[] = [];
  public initialValue: string = '';
  public isLoading: boolean = false;

  // tenemos que inyectar el servicio desde el constructor
  constructor(private countriesService: CountriesService) {
  }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountry.countries;
    this.initialValue = this.countriesService.cacheStore.byCountry.term;
  }

  public searchCountry(term: string): void {
    this.isLoading = true;
    this.countriesService.searchCountry(term)
      .subscribe(// tenemos que colocar siempre el subscribe para poder hacer la consulta a la api
        countries => {
          this.countries = countries;
          this.isLoading = false;
        }
      )

  }


}
