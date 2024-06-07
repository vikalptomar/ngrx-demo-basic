import { Action, createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  loadCountSuccess,
} from './counter.action';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => initialState),
  on(loadCountSuccess, (state, { count }) => count)
);

export function counterReducer(state: any, action: Action) {
  const nextState = _counterReducer(state, action);
  console.log('For Logs');
  console.log('Previous State:', state);
  console.log('Action:', action);
  console.log('Next State:', nextState);
  return nextState;
}
