import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Todo } from '../model';
import { TodoService } from '../service';


@Component({
  selector: 'todo-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})

export class TodoListComponent implements OnInit {
  
  todo$: Observable<Todo[]>;
  loading$: Observable<boolean>;

  constructor(private todoService: TodoService, private router: Router){

    this.todo$ = this.todoService.entities$;
    this.loading$ = this.todoService.loading$;
  }

  ngOnInit() {
    this.getTodos();
  }


  getTodos() {
    this.todoService.getAll();
  }

  goToAdd() {
    this.router.navigate(['new']);
  }

  onSelected(item: Todo) {
    this.router.navigate(['detail', item.id]);
  }

  onDelete(item: Todo) {
    this.todoService.delete(item.id);
  }


} 