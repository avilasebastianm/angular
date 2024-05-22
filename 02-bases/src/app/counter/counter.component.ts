
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{counter}}</h1>

    <button (click)="increaseBy()"> +1 </button>
    <button (click)="reset()"> Reset </button>
    <button (click)="decraseBy()" > -1 </button>
  `
})

export class CounterComponent  {
  public counter =10;


  increaseBy (){
    this.counter+=1;

  }
  decraseBy(){
    this.counter-=1;
  }
  reset(){
    this.counter=10;
  }

}

