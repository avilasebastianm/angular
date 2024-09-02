import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, delay, map, Observable, of, tap} from "rxjs";
import {CountryInterface} from "../interfaces/country.interface";
import {CacheStore} from "../interfaces/cache-store.interface";
import {Region} from "../interfaces/region.type";


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1'
  public cacheStore: CacheStore = {
    byCapital: {
      term: '',
      countries: []
    },
    byCountry: {
      term: '',
      countries: []
    },
    byRegion: {
      region: '',
      countries: []
    }

  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage()
  }

  private getCountriesRequest(url: string): Observable<CountryInterface[]> {
    return this.http.get<CountryInterface[]>(url)
      .pipe(
        catchError(error => of([])),
      )
  };


  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cacheStore')) {
    }
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)
  }

// creamos el observable para que despues lo llame el componente donde lo va a a utilizar en este caso se uti9liza en el componente de la pag bycapital
  public searchCapital(term: string): Observable<CountryInterface[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCapital = {term, countries}),
        tap(() => this.saveToLocalStorage())
      );
  }


  public searchCountry(term: string): Observable<CountryInterface[]> {
    const url: string = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCountry = {term, countries}),
        tap(() => this.saveToLocalStorage())
      );
  };


  public searchRegion(region: Region,): Observable<CountryInterface[]> {
    const url: string = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byRegion = {region, countries}),
        tap(() => this.saveToLocalStorage())
      );
  }


  public searchCountryByAlphaCode(code: string): Observable<CountryInterface | null> {
    const url: string = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<CountryInterface[]>(url)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      )
  };

}
