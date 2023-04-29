import { createReducer, on } from '@ngrx/store';
import {
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
} from '../actions/user.actions';
import { User } from '../interfaces/user.interface';

export interface UserState {
  users: User[];
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
