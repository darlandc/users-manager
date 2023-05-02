import { createSelector } from '@ngrx/store';
import { UsersState } from '../users.reducer';

export const allUsersSelector = createSelector(
  (state: any) => state.app.users,
  (users: ReadonlyArray<UsersState>) => users
);
