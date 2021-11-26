import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  todoForm = new FormGroup({
    todoText: new FormControl('')
  });

  constructor(private todoService: TodoService) { }

  handleSubmit() {
    const todoTextValue = this.todoForm.get('todoText')?.value;
    
    this.todoService.addTodo(todoTextValue);
  }

}
