import { IndexRoutingModule } from './index-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListComponent } from './todo-list/todo-list.component';
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [
    TodoListComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
