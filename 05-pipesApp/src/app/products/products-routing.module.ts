import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicsPagesComponent} from "./pages/basics-pages/basics-pages.component";
import {NumbersPagesComponent} from "./pages/numbers-pages/numbers-pages.component";
import {UncommonPageComponent} from "./pages/uncommon-page/uncommon-page.component";
import {OrderComponent} from "./pages/order/order.component";

const routes: Routes = [
    {
        path: '',
        component: BasicsPagesComponent,
    },
    {
        path: 'numbers',
        component: NumbersPagesComponent,
    },
    {
        path: 'uncommon',
        component: UncommonPageComponent,
    },
    {
        path: 'custom',
        component: OrderComponent,
        
    },
    {
        path: '**',
        redirectTo: '',
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
}
