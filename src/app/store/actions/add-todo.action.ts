import { createAction, props } from '@ngrx/store';
import { TodoItemInterface } from 'src/app/models/todo-item.interface';

export const addTodo = createAction(
  '[Todo List] Add Todo',
  props<{ item: TodoItemInterface }>()
);
