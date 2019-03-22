import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { DefaultDataServiceConfig, NgrxDataModule } from 'ngrx-data';
import { entityMetadata, pluralNames } from './entity.metadata';

import { NgrxDataToastService } from './ngrx-data-toast.service';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://jsonplaceholder.typicode.com/'
};

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgrxDataModule.forRoot({
      entityMetadata: entityMetadata,
      pluralNames: pluralNames
    }),
    HttpClientModule,
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ]
})
export class TodoStoreModule { 
  constructor(toastService: NgrxDataToastService) {}
}