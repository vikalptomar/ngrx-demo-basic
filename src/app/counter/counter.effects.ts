import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CounterService } from '../service/counter.service';
import { Store } from '@ngrx/store';
import {
  loadCount,
  loadCountFailure,
  loadCountSuccess,
} from './counter.action';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CounterEffects {
  constructor(
    private actions$: Actions,
    private counterService: CounterService,
    private store: Store
  ) {}

  loadCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCount),
      mergeMap(() =>
        this.counterService.getCountRecords().pipe(
          map((res: any) => {
            console.log('API response', res);
            return loadCountSuccess({ count: res });
          }),
          catchError((error) => {
            console.log('API error', error);
            return of(loadCountFailure({ error }));
          })
        )
      )
    )
  );
}
