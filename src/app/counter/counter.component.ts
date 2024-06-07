import { Component } from '@angular/core';
import { increment, decrement, reset, loadCount } from './counter.action';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = this.store.select(selectCount);
    this.count$.subscribe((count) => console.log('Count:', count));
  }

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
  set() {
    this.store.dispatch(loadCount());
  }
}
