import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

import { TodoModel } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoSubject: BehaviorSubject<TodoModel[]> = new BehaviorSubject(initialTodos);
  todos: TodoModel[] = [];

  constructor() {
    this.onInit();
  }

  onInit(): void {
    this.todoSubject.subscribe({
      next: value => this.todos = value,
      error: err => console.log(err)
    });
  }

  get getTodos() {
    return this.todoSubject.getValue();
  }

  removeTodo(todoToRemove: TodoModel): void {
    const todosWithoutRemovedTodo = this.getTodos.filter(
      todo => todo !== todoToRemove
    );

    this.todoSubject.next(todosWithoutRemovedTodo);
  }

  editTodo(value: string, todoToEdit: TodoModel): void {
    const todosWithEdition = this.getTodos.map(todo => {
      if (todo === todoToEdit)
        todo.text = value
      
      return todo;
    });
    
    this.todoSubject.next(todosWithEdition);
  }

  // addTodo(todoText: string) {
  //   const todoId = this.getHigherIdNumber();

  //   this.todos.push({
  //     id: todoId,
  //     text: todoText
  //   });
  // }

  // private getHigherIdNumber() {
  //   const ids = this.todos.map(todo => todo.id);
  //   const higherIdNumber = Math.max(...ids);

  //   return higherIdNumber;
  // }

  private getById(id: number) {
    const filteredTodo = this.getTodos.filter(
      todo => todo.id === id
    );

    return filteredTodo;
  }
}

const initialTodos = [
  {
    id: 1,
    text: 'todo text'
  },
  {
    id: 2,
    text: 'todo text'
  },
  {
    id: 3,
    text: 'todo text'
  },
  {
    id: 4,
    text: 'todo text'
  }
]