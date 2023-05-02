import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, first, of, toArray } from 'rxjs';
import { loadUsers } from '../../actions/user.actions';
import { User } from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
})
export class ListingComponent implements OnInit {
  users$: Observable<any>;
  users: User[] = [];
  error = '';

  constructor(private store: Store<any>) {
    this.users$ = store.pipe(select((state) => state.users.users));
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }
}
