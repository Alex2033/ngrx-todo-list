import { createSelector } from '@ngrx/store';
import { TodoItemInterface } from '../models/todo-item.interface';

interface AppState {
  todos: TodoItemInterface[];
}

export const selectTodos = createSelector(
  (state: AppState) => state.todos,
  (todos: TodoItemInterface[]) => todos
);
