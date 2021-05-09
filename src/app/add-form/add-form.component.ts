import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItemInterface } from '../models/todo-item.interface';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  @Output() add: EventEmitter<object> = new EventEmitter<object>();
  public text: string = '';

  constructor() {}

  ngOnInit(): void {}

  addItem(): void {
    const newItem: TodoItemInterface = {
      text: this.text,
      id: Math.floor(Math.random() * 1000),
    };

    this.add.emit(newItem);

    this.text = '';
  }
}
