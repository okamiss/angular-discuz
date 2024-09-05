import { createReducer, on } from '@ngrx/store'
import { menuSave } from './menu.actions'

export interface ItemState {
  list: MenuNode[]
}

export const initialState: ItemState = {
  list: []
}

export const menuReducer = createReducer(
  initialState,
  on(menuSave, (state, { list }) => ({ ...state, list }))
)

// export const count: string = 'sd'
// export const newsReducer = createReducer(
//   count,
//   on(addc, (state, actions) => {
//     console.log(state, '@@@@')
//     console.log(actions, '####')
//     state = 'fk'
//     return state
//   })
// )

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
