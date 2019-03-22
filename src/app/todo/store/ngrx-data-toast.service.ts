import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import {
  EntityAction,
  EntityCacheAction,
  ofEntityOp,
  OP_ERROR,
  OP_SUCCESS
} from 'ngrx-data';
import { filter } from 'rxjs/operators';

/** Report ngrx-data success/error actions as toast messages * */
@Injectable({ providedIn: 'root' })
export class NgrxDataToastService {
  constructor(actions$: Actions) {
    actions$
      .pipe(
        ofEntityOp(),
        filter(
          (ea: EntityAction) =>
            ea.payload.entityOp.endsWith(OP_SUCCESS)
        )
      )
      // this service never dies so no need to unsubscribe
      .subscribe(action =>
        alert("Sucesso")
      );

    actions$
      .pipe(
        ofEntityOp(),
        filter(
          (ea: EntityAction) =>
            ea.payload.entityOp.endsWith(OP_ERROR)
        )
      )
      // this service never dies so no need to unsubscribe
      .subscribe(action =>
        alert("Error")
      );

    actions$
      .pipe(
        ofType(
          EntityCacheAction.SAVE_ENTITIES_SUCCESS
        )
      )
      .subscribe((action: any) =>
        alert(
          alert("Sucess in Save/Update: `${action.type}`")
        )
      );

    actions$
      .pipe(
        ofType(
          EntityCacheAction.SAVE_ENTITIES_ERROR
        )
      )
      .subscribe((action: any) =>
        alert(
          alert("Error in Save/Update: `${action.type}`")
        )
      );
  }
}