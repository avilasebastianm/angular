import {Component} from '@angular/core';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.component.html',

})
export class ReceptorComponent {

  public funcionenpadre(term: string): void {

    console.log(term);
  }

}
