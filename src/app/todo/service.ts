import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from 'ngrx-data';
import { Todo } from './model';

@Injectable({ providedIn: 'root' })
export class TodoService extends EntityCollectionServiceBase<Todo> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('todos', serviceElementsFactory);
  }
}