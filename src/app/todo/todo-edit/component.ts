import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Todo } from '../model';
import { TodoService } from '../service';


@Component({
  selector: 'todo-edit',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})

export class TodoEditComponent implements OnInit {
  
  todoEditForm = new FormGroup({
    title: new FormControl(''),
    completed: new FormControl('')
  });

  todo$: Observable<Todo>;
  loading$: Observable<boolean>;
  
  edit: boolean = false;


  constructor(private todoService: TodoService, private route: ActivatedRoute){

    this.loading$ = this.todoService.loading$;

    const _id = this.checkStatus();
    if(_id != null) this.getItem(_id);    
  }
  

  ngOnInit() { }

  addToDo() {

    const todo : Todo = {
      id: 1,
      userId: 1,
      title: this.todoEditForm.value.title
    }

    this.todoService.add(todo);

  }

  getItem(id: string) {
    this.todo$ = this.todoService.getByKey(id);
    this.todoService.getByKey(id).subscribe(result => this.todoEditForm.patchValue(result)); //Not Suport Convert Edit
  }

  checkStatus(): string {
    const id = this.route.snapshot.paramMap.get('id');
    id ? this.edit = true : this.edit = false;
    return id;
  }

  updateTodo() {

    const todo : Todo = {
      id: 1,
      userId: 1,
      title: this.todoEditForm.value.title,
      completed: this.todoEditForm.value.completed
    };
    
    this.todoService.update(todo);
  }

} 