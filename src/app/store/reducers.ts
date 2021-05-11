import { createReducer, on } from '@ngrx/store';
import { TodoItemInterface } from '../models/todo-item.interface';
import { addTodo } from './actions/add-todo.action';
import { deleteTodo } from './actions/delete-todo.action';
import { getTodos } from './actions/get-todos.action';

export const initialState: TodoItemInterface[] = [];

export const todoListReducer = createReducer(
  initialState,
  on(getTodos, (state, { items }) => [...state, ...items]),
  on(addTodo, (state, { item }) => [...state, item]),
  on(deleteTodo, (state, { id }) => state.filter((item) => item.id !== id))
);
