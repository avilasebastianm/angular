import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CountriesService} from "../../services/countries.service";
import {switchMap} from "rxjs";
import {Country} from "../../interfaces/country";

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
// implementamos el oninit para asegurarnos que cargue toda la lagina antes de hacer algo
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(private activadedRoute: ActivatedRoute,
              private countriesService: CountriesService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.activadedRoute.params
      .pipe(
        switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id))
      ).subscribe(country => {

      if (!country) {
        return this.router.navigate(['']);
      }

      return this.country = country;

    })
  }


}

