import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  // @Output()
  // public onValue = new EventEmitter<string>();
  @Output()
  public onDebounce = new EventEmitter<string>();

  @Input()
  public placeholder: string = '';

  private debouncer: Subject<string> =  new Subject<string>();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(1000)
    )
      .subscribe(value => {
      this.onDebounce.emit(value)

    })
  }

  onKeyPress(searchTerm: string){
    this.debouncer.next(searchTerm)
  }
}
