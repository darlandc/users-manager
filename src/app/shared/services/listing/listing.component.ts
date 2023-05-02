import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, first, of, toArray } from 'rxjs';
import {
  loadUsers,
  loadUsersSuccess,
} from 'src/app/state/users/actions/user.actions';
import { User } from 'src/app/state/users/interfaces/user.interface';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
})
export class ListingComponent {
  users$: Observable<any>;
  users: User[] = [];
  error = '';

  constructor(private store: Store<{ users: User[] }>) {
    this.users$ = store.pipe(select((state) => state.users));
    this.store.dispatch(loadUsers());
    this.users$.subscribe((users) => {
      this.users = users.users;
    });
  }
}
