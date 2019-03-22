import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { TodoListComponent } from './todo/todo-list/component';
import { TodoEditComponent } from './todo/todo-edit/component';
import { TodoDetailsComponent } from './todo/todo-detail/component';

const routes: Routes = [
  { path: '', redirectTo: 'todo', pathMatch: 'full' },
  { path: 'todo', component: TodoListComponent },
  { path: 'edit/:id', component: TodoEditComponent },
  { path: 'new', component: TodoEditComponent },
  { path: 'detail/:id', component: TodoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
