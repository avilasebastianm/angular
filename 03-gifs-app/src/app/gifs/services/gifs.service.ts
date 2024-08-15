import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Gif, SearchResponse} from "../interfaces/gifs.interfaces";

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifsList: Gif[] = [];
  private _tagshistory: string[] = [];
  private apikey: string = '8pipuGbPcpOjBUrGrPIUvazAqFrwE1QV';
  private serviceUrl: String = "https://api.giphy.com/v1/gifs"

  constructor(private http: HttpClient) {
    this.loadLocalStorage()

  }

  get tagHistory() {
    return [...this._tagshistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();//coloco en minusculas todas las palabras
    if (this._tagshistory.includes(tag)) {//pregunto si el tag esta repetido
      this._tagshistory = this._tagshistory.filter((oldTag) => oldTag !== tag);//elimino el tag repetido
    }
    this._tagshistory.unshift(tag); //coloco el tag repetido arriba de todo
    this._tagshistory = this._tagshistory.splice(0, 10)//corto el arreglo para que solo guarde 10 elemeentos
    this.saveLocalStorage(); //Guardo el historial en el localstorage

  }

  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagshistory));// con el metodo localStorage.setItem guardo el historial de los gifs.Luego lo tengo que convertir en un string(el localstorage solo guarda strings solo guarda string )
  }

  private loadLocalStorage() {
    if (!localStorage.getItem('history')) return;
    this._tagshistory = JSON.parse(localStorage.getItem('history')!);
    if (this._tagshistory.length === 0) return;
    this.searchTag(this._tagshistory[0])
  }


  public searchTag(tag: string) {
    if (tag.length === 0) return
    this.organizeHistory(tag);
    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q', tag)
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
      .subscribe(resp => {
        this.gifsList = resp.data;

      });


  }
}
