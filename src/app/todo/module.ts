import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoStoreModule } from './store/store.module';

//Services
import { TodoService } from './service';

//Components
import { TodoListComponent } from './todo-list/component';
import { TodoEditComponent } from './todo-edit/component';
import { TodoDetailsComponent } from './todo-detail/component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoEditComponent,
    TodoDetailsComponent
  ],
  imports: [
    TodoStoreModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule {}