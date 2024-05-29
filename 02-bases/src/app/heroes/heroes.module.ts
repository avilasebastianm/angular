import {NgModule} from "@angular/core";

import {HeroComponent} from "../heroes/component/hero/hero.component";
import {ListComponent} from "../heroes/component/list/list.component";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
  ]
})

export class HeroesModule{

}
