import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../users.reducer';

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const selectUserList = createSelector(
  getUserFeatureState,
  (state: any) => state.users
);
