import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {debounceTime, Subject} from "rxjs";


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',

})
export class SearchBoxComponent implements OnInit {

  private deboucer: Subject<string> = new Subject<string>;


  @Input()
  placeHolder: string = '';


  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDeboucer = new EventEmitter<string>();

  ngOnInit(): void {
    this.deboucer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.onDeboucer.emit(value);
      })
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeySearch(searchTerm: string) {
    this.deboucer.next(searchTerm)
  }


}
