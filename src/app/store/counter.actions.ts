import { createAction, props } from '@ngrx/store';

export const increment = createAction('jia');
export const decrement = createAction('jian');
export const reset = createAction('Reset');


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/


export const addc = createAction('addcbb', props<any>());