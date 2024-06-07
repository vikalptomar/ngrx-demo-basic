import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const loadCount = createAction('[Counter] Load');

export const loadCountSuccess = createAction(
  '[Counter] Load Count Sucess',
  props<{ count: number }>()
);

export const loadCountFailure = createAction(
  '[Counter] Load Count Failure',
  props<{ error: any }>()
);
