import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


import {CounterModule} from "./counter/counter.module";
import {HeroesModule} from "./heroes/heroes.module";
import {BrowserModule} from "@angular/platform-browser";
import {MainPageComponent} from "./dbz/pages/main-page.component";
import {DbzModule} from "./dbz/dbz.module";


@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    HeroesModule,
    CounterModule,
    AppRoutingModule,
    BrowserModule,
    DbzModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
