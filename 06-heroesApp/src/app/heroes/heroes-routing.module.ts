import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {LayoutPageComponent} from "./pages/layout-page/layout-page.component";
import {ListPageComponent} from "./pages/list-page/list-page.component";
import {NewPageComponent} from "./pages/new-page/new-page.component";
import {ShearchPageComponent} from "./pages/search-page/shearch-page.component";
import {HeroPageComponent} from "./pages/hero-page/hero-page.component";


const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'list',
        component: ListPageComponent
      },
      {
        path: 'new-hero',
        component: NewPageComponent
      },
      {
        path: 'search',
        component: ShearchPageComponent
      },
      {
        path: 'edit/:id',
        component: NewPageComponent
      },
      {
        path: ':id',
        component: HeroPageComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {
}

