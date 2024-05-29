import {NgModule} from "@angular/core";
import {CounterComponent} from "../counter/component/counter/counter.component";




@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule {
}
