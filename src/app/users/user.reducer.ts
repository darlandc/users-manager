import { createReducer, on } from '@ngrx/store';
import {
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
} from './actions/user.actions';

export interface UserState {
  users: any;
  user?: any;
  error?: ''
}

export const initialState: UserState = {
  users: [],
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, error }))
);
