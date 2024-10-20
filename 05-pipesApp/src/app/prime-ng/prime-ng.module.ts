import {NgModule} from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";
import {ToolbarModule} from "primeng/toolbar";
import {SplitButtonModule} from "primeng/splitbutton";
import {InputTextModule} from "primeng/inputtext";
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';
import {TagModule} from 'primeng/tag';

@NgModule({
  exports: [
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    SplitButtonModule,
    InputTextModule,
    TableModule,
    RatingModule,
    TagModule


  ]
})
export class PrimeNgModule {
}



