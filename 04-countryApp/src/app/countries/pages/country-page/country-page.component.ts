import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
// implementamos el oninit para asegurarnos que cargue toda la lagina antes de hacer algo
export class CountryPageComponent implements OnInit {
  constructor(private activadedRoute: ActivatedRoute,
              private countriesService: CountriesService) {

  }

  ngOnInit(): void {
    this.activadedRoute.params
      .subscribe(({id}) => {
        this.countriesService.searchCountryByAlphaCode(id)
          .subscribe(Country => {
            console.log(Country)
          })
      })
  }
}
