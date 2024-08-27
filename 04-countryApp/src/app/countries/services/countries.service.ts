import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../interfaces/country";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1'


  constructor(private http: HttpClient) {
  }

// creamos el observable para que despues lo llame el componente donde lo va a a utilizar en este caso se uti9liza en el componente de la pag bycapital
  public searchCapital(term: String): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url);
  }
}
