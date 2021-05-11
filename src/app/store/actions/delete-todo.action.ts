import { createAction, props } from '@ngrx/store';

export const deleteTodo = createAction(
  '[Todo List] Delete Todo',
  props<{ id: number }>()
);
