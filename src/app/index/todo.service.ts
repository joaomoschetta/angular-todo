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

  addTodo(todoText: string): void {
    if (!todoText) return

    const currentTodos = this.getTodos;
    const todoId = this.getHigherIdNumber();

    currentTodos.push({ id: todoId, text: todoText });

    this.todoSubject.next(currentTodos);
  }
  
  editTodo(value: string, todoToEdit: TodoModel): void {
    const todosWithEdition = this.getTodos.map(todo => {
      if (todo === todoToEdit)
        todo.text = value
      
      return todo;
    });
    
    this.todoSubject.next(todosWithEdition);
  }
  
  removeTodo(todoToRemove: TodoModel): void {
    const todosWithoutRemovedTodo = this.getTodos.filter(
      todo => todo !== todoToRemove
    );

    this.todoSubject.next(todosWithoutRemovedTodo);
  }

  private getHigherIdNumber(): number {
    const ids = this.todos.map(todo => todo.id);
    const higherIdNumber = Math.max(...ids);

    return higherIdNumber;
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
  }
]