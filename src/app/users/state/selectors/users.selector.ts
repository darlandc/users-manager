import { createSelector } from '@ngrx/store';
import { UserState } from '../users.reducer';

export const allUsersSelector = createSelector(
  (state: any) => state.app.users,
  (users: ReadonlyArray<UserState>) => users
);
