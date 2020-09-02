import { NgModule } from '@angular/core';
import {
  NgrxAutoEntityModule
} from '@briebug/ngrx-auto-entity';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './app.state';

@NgModule({
  imports: [
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    NgrxAutoEntityModule.forRoot()
  ]
})
export class StateModule { }
