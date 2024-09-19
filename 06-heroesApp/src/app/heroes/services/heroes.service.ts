import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, map} from "rxjs";
import {Hero} from '../interfaces/hero.interface';
import {environments} from "../../../environments/environments";

@Injectable({providedIn: 'root'})
export class HeroesService {

  // Define la URL base para la API
  private baseUrl: string = environments.baseUrl;


  constructor(private http: HttpClient) {
  }

  // GET request para obtener todos los héroes
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  // GET request para obtener un héroe por ID
  getHeroById(id: string): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        // Si hay un error, devuelve undefined
        catchError(error => of(undefined))
      );
  }

  // GET request para obtener sugerencias de héroes basadas en una consulta
  getSuggestions(query: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
  }

  // POST request para agregar un nuevo héroe
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);

  }

// PUT request para actualizar un héroe
  updateHero(hero: Hero): Observable<Hero> {
    // Validar que el héroe tenga ID
    if (!hero.id) throw new Error('Hero id is required');

    return this.http.patch<Hero>(`${this.baseUrl}/heroes${hero.id}`, hero);

  }

  // DELETE request para eliminar un héroe por ID
  deleteHeroById(id: string): Observable<boolean> {
    return this.http.delete<Hero>(`${this.baseUrl}heroes/${id}`)
      .pipe(
        // Si hay un error, devuelve false
        catchError(error => of(false)),
        // Mapea la respuesta a true si la eliminación fue exitosa
        map(resp => true))

  }

}
