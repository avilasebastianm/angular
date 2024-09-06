import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
// idioma global
import localeEsAR from '@angular/common/locales/es-AR'
import {registerLocaleData} from "@angular/common";

import localeFrCA from '@angular/common/locales/fr-CA';

registerLocaleData(localeEsAR)
registerLocaleData(localeFrCA)


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule

  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-AR'
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
