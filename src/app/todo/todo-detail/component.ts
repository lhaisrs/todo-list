import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Todo } from '../model';
import { TodoService } from '../service';


@Component({
  selector: 'todo-detail',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})

export class TodoDetailsComponent implements OnInit {

  todo$: Observable<Todo>;
  loading$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) {
    this.loading$ = this.todoService.loading$;
    this.getTodoItem();
  }

  ngOnInit() { }

  getTodoItem() {
    const id = this.route.snapshot.paramMap.get('id'); 
    this.todo$ = this.todoService.getByKey(id);
  }

  onDelete(item: Todo) {
    this.todoService.delete(item.id);
    this.goToTodos();
  }

  goToTodos(){
    this.router.navigate(['todo']);
  }

  onEdit(item: Todo) {
    this.router.navigate(['edit', item.id]);
  }
}