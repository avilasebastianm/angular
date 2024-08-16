import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./shared/pages/home-page/home-page.component";
import {AboutPageComponent} from "./shared/pages/about-page/about-page.component";
import {ContactPageComponent} from "./shared/pages/contact-page/contact-page.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },


]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)//for root indica que es nuestra routar principal . hay dos opcones la otra es secundaria. Sabemos que es la principal por que el componente routing esta en el src
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
