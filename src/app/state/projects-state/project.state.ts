import { buildState, IEntityState } from '@briebug/ngrx-auto-entity';
import { Projects } from '../../models/projects-model';

export const {
  initialState: initialProjectState,
  selectors: {
    selectAll: allProjects
  },
  facade: ProjectFacadeBase
} = buildState(Projects);

export function projectReducer(state = initialProjectState): IEntityState<Projects> {
  return state;
}
