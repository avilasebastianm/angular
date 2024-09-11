import {Component, OnInit} from '@angular/core';
import {Hero} from "../../interfaces/hero.interface";
import {HeroesService} from "../../services/heroes.service";
import {CardComponent} from "../../component/card/card.component"

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
