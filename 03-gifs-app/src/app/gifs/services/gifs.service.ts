import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagshistory: string[] = [];

  constructor() {
  }

  get tagHistory() {
    return [...this._tagshistory];
  }

  public searchTag(tag: string) {
    this._tagshistory.unshift(tag);
  }
}
