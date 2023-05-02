import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../../services/user.service';
import * as UserActions from '../actions/users.actions';

@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      concatMap(() =>
        this.userService.getUsers().pipe(
          map((users) => UserActions.loadUsersSuccess({ users })),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
