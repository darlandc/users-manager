import { createReducer, on } from '@ngrx/store';
import {
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
} from './actions/users.actions';
import { User } from '../interfaces/user.interface';

export interface UserState {
  activeLogon?: User;
  users: User[];
  selectedUser?: User;
  error?: ''
}

export const initialState: UserState = {
  users: [],
};

export const usersReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, error }))
);
