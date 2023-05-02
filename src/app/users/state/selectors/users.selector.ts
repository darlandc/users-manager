import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../users.reducer';

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const allUsersSelector = createSelector(
  getUserFeatureState,
  (state: any) => state.users
);
