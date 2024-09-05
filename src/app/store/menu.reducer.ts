import { createReducer, on } from '@ngrx/store'
import { increment, decrement, reset, addc } from './counter.actions'

export const initialState = 10

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, actions) => {
    return state + 1
  }),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
)

export const count: string = 'sd'
export const newsReducer = createReducer(
  count,
  on(addc, (state, actions) => {
    console.log(state, '@@@@')
    console.log(actions, '####')
    state = 'fk'
    return state
  })
)

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
