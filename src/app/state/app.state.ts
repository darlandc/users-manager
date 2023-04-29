import { EntityState } from '@ngrx/entity';
import { User } from './users/interfaces/user.interface';

export interface AppState {
  users: EntityState<User>;
}
