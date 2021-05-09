import { Component, OnInit } from '@angular/core';
import { TodoItemInterface } from '../models/todo-item.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todos: TodoItemInterface[] = [
    {
      id: 1,
      text: 'Text 1',
    },
    {
      id: 2,
      text: 'Text 2',
    },
    {
      id: 3,
      text: 'Text 3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  delete(id: number): void {
    this.todos = this.todos.filter((item) => item.id !== id);
  }

  add(item: TodoItemInterface): void {
    this.todos.push(item);
  }
}
