import { Key } from '@briebug/ngrx-auto-entity';

export class Projects {
  @Key id: number;
  title: string;
  details: string;
  importanceLevel: number;
}
