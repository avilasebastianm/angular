import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroesRoutingModule} from './heroes-routing.module';
import {HeroPageComponent} from './pages/hero-page/hero-page.component';
import {LayoutPageComponent} from './pages/layout-page/layout-page.component';

import {ListPageComponent} from './pages/list-page/list-page.component';
import {NewPageComponent} from './pages/new-page/new-page.component';
import {ShearchPageComponent} from './pages/search-page/shearch-page.component';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,

    ListPageComponent,
    NewPageComponent,
    ShearchPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule {
}
