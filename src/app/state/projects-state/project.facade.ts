import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { ProjectFacadeBase } from '../projects-state/project.state';
import { Projects } from '../../models/projects-model';

@Injectable({ providedIn: 'root' })
export class ProjectFacade extends ProjectFacadeBase {
  constructor(store: Store<AppState>) {
    super(Projects, store);
  }
}
