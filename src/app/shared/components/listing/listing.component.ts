import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, first, of, toArray } from 'rxjs';
import {
  loadUsers,
} from '../../../users/actions/user.actions';
import { User } from '../../interfaces//user.interface';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
})
export class ListingComponent {
  users$: Observable<any>;
  users: User[] = [];
  error = '';

  constructor(private store: Store<any>) {
    this.users$ = store.pipe(select((state) => state.users.users));
  }

  ngOnInit() {
    this.store.dispatch(loadUsers());
  }
}
