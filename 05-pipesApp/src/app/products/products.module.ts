import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {BasicsPagesComponent} from './pages/basics-pages/basics-pages.component';
import {NumbersPagesComponent} from './pages/numbers-pages/numbers-pages.component';
import {UncommonPageComponent} from './pages/uncommon-page/uncommon-page.component';
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import {OrderComponent} from './pages/order/order.component';
import {ToggleCasePipe} from "./pipes/toggle-case.pipe";
import {CantFlyPipe} from "./pipes/cant-fly.pipe";
import {SortByPipe} from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPagesComponent,
    NumbersPagesComponent,
    UncommonPageComponent,
    OrderComponent,
    //pipes
    SortByPipe,
    ToggleCasePipe,
    CantFlyPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,


  ]
})
export class ProductsModule {
}
