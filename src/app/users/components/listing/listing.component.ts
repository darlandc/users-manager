import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUsers } from '../../state/actions/users.actions';
import { User } from '../../interfaces/user.interface';
import { allUsersSelector } from '../../state/selectors/users.selector';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
})
export class ListingComponent implements OnInit {
  usersList$: Observable<any>;
  users: User[] = [];
  error = '';

  constructor(private store: Store<any>) {
    this.usersList$ = store.pipe(select(allUsersSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }
}
