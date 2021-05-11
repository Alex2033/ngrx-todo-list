import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItemInterface } from './models/todo-item.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<TodoItemInterface[]> {
    return this.http.get<TodoItemInterface[]>('assets/data.json');
  }
}
