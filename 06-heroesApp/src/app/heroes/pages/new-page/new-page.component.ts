import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Publisher} from "../../interfaces/hero.interface";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent {

  //crear formularios reactivos
  public heroFormn = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', {nonNullable: true}),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alt_img: new FormControl(''),

  })
  public publishers = [
    {id: 'DC Comics', desc: 'DC - Comics'},
    {id: 'Marvel Comics', desc: 'Marvel - Comics'},
  ];


  onSubmit(): void {
    console.log({
      formIsValid: this.heroFormn.valid,
      value: this.heroFormn.value
    });
  }


}

