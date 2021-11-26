import { Component, OnInit } from '@angular/core';

import { TodoModel } from '../../models/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: TodoModel[] = [];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.todoSubject.subscribe({
      next: value => this.todos = value,
      error: err => console.log(err)
    });
  }

  handleInputValueChange(event: any, todoToEdit: TodoModel) {
    const value = event.target.value;
    
    this.todoService.editTodo(value, todoToEdit);
  }
  
  handleRemove(todoToRemove: TodoModel) {
    this.todoService.removeTodo(todoToRemove);
  }
}
