import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoItemInterface } from '../models/todo-item.interface';
import { addTodo } from '../store/actions/add-todo.action';
import { deleteTodo } from '../store/actions/delete-todo.action';
import { getTodos } from '../store/actions/get-todos.action';
import { selectTodos } from '../store/selectors';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todos$: Observable<TodoItemInterface[]> = this.store.pipe(
    select(selectTodos)
  );

  constructor(private store: Store, private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getTodos().subscribe((items) => {
      this.store.dispatch(getTodos({ items }));
    });
  }

  delete(id: number): void {
    this.store.dispatch(deleteTodo({ id }));
  }

  add(item: TodoItemInterface): void {
    this.store.dispatch(addTodo({ item }));
  }
}
