import {
  Component,
  ElementRef,
  EventEmitter,
  Input, OnDestroy,
  OnInit,
  Output,
  ViewChild,

} from '@angular/core';
import {debounceTime, Subject, Subscription} from "rxjs";


@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',

})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private deboucer: Subject<string> = new Subject<string>;
  private deoucerSubscription?: Subscription

  @Input()
  placeHolder: string = '';
  @Input()
  initialValue: string = '';


  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDeboucer = new EventEmitter<string>();

  ngOnInit(): void {
    this.deoucerSubscription = this.deboucer
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {
        this.onDeboucer.emit(value);
      })
  }

  ngOnDestroy() {// ciclo de vida de los componentes.
    this.deoucerSubscription?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeySearch(searchTerm: string) {
    this.deboucer.next(searchTerm)
  }


}
