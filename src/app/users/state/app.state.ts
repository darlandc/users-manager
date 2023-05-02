import { EntityState } from '@ngrx/entity';
import { User } from '../interfaces/user.interface';

export interface AppState {
  users: EntityState<User>;
}
