import { Component } from '@angular/core';
import { selectCount } from '../counter.selector';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  countVariable$: Observable<any>;
  constructor(private stores: Store<{ count: any }>) {
    this.countVariable$ = this.stores.select(selectCount);
  }
}
