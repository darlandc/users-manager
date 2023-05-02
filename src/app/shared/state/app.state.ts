import { EntityState } from '@ngrx/entity';
import { User } from '../shared/interfaces/user.interface';

export interface AppState {
  users: EntityState<User>;
}
