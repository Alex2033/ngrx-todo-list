import { createAction, props } from '@ngrx/store';
import { TodoItemInterface } from 'src/app/models/todo-item.interface';

export const getTodos = createAction(
  '[Book List/API] Get Todos',
  props<{ items: TodoItemInterface[] }>()
);
