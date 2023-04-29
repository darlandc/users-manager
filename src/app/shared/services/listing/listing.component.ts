import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { loadUsers, loadUsersSuccess } from 'src/app/state/users/actions/user.actions';
import { User } from 'src/app/state/users/interfaces/user.interface';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
})
export class ListingComponent implements OnInit {
  users$: Observable<User[]>;
  users = [];

  constructor(private store: Store<{ users: User[] }>) {
    this.users$ = store.pipe(select(state => state.users));
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.store.dispatch(loadUsers());
  }
}
