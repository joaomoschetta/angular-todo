import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IndexRoutingModule } from './index-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { IndexComponent } from './index.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [
    TodoListComponent,
    IndexComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IndexModule { }
