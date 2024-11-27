import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Hero, Publisher} from "../../interfaces/hero.interface";
import {HeroesService} from "../../services/heroes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit {

  //crear formularios reactivos
  public heroFormn = new FormGroup({
    id: new FormControl<string>(''),
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

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }


  get currentHero(): Hero {
    const hero = this.heroFormn.value as Hero;
    return hero;
  }

  ngOnInit() {
    if (!this.router.url.includes('edit')) return; //Si el url incluye la palabra edit no hace nada
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroById(id)),
      ).subscribe(hero => {
      if (!hero) return this.router.navigateByUrl('/');//si el heroe no exite lo redirecciono a el home
      this.heroFormn.reset(hero);//Si el heroe existe lo guardo y pongo los valores en blanco
      return
    })


  }


  onSubmit(): void {
    if (this.heroFormn.invalid) return;

    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero)
        .subscribe(hero => {
          //TODO mostrar Snackbar
        })
      return;
    }

    this.heroesService.addHero(this.currentHero)
      .subscribe(hero => {
        //TODO mostrar Snackbar y navegar a /heroes/edit/hero.id
      })
  }


}


