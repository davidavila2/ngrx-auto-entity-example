import { IEntityState } from '@briebug/ngrx-auto-entity';
import { Projects } from '../models/projects-model';
import { ActionReducerMap } from '@ngrx/store';
import { projectReducer } from './projects-state/project.state';

export interface AppState {
  project: IEntityState<Projects>;
}

export const appReducer: ActionReducerMap<AppState> = {
  project: projectReducer
};
