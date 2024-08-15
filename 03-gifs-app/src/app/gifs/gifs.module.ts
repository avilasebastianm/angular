import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './pages/home/home-page.component';
import {SearchBoxComponent} from './component/search-box/search-box.component';
import {CartListComponent} from './component/cart-list/cart-list.component';
import {CardComponent} from './component/card/card.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CartListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [
    HomePageComponent
  ]
})
export class GifsModule {
}
