import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './pages/home/home-page.component';
import { SearchBoxComponent } from './component/search-box/search-box.component';
import { CartListComponent } from './component/cart-list/cart-list.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CartListComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    HomePageComponent
  ]
})
export class GifsModule {
}
