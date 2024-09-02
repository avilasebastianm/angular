import {Component, Input, OnInit} from '@angular/core';
import {CountryInterface} from "../../interfaces/country.interface";
import {CountriesService} from "../../services/countries.service";
import {Region} from "../../interfaces/region.type";


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
  public countries: CountryInterface[] = [];
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region;


  // tenemos que inyectar el servicio desde el constructor
  constructor(private countriesService: CountriesService) {
  }


  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  public searchRegion(term: Region): void {
    this.selectedRegion = term;
    this.countriesService.searchRegion(term)
      .subscribe(// tenemos que colocar siempre el subscribe para poder hacer la consulta a la api
        countries => {
          this.countries = countries;
        }
      )

  }
}
