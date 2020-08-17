import { Key } from '@briebug/ngrx-auto-entity';

export class Project {
  @Key id: number;
  title: string;
  details: string;
  importanceLevel: number;
}
