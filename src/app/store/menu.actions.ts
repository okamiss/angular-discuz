import { createAction, props } from '@ngrx/store'

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/

export const menuSave = createAction('menuSave', props<{ list: MenuNode[] }>())
