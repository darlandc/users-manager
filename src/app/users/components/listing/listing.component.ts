import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUsers } from '../../state/actions/users.actions';
import { User } from '../../interfaces/user.interface';
import { selectUserList } from '../../state/selectors/users.selector';
import { UserState } from '../../state/users.reducer';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
})
export class ListingComponent implements OnInit {
  usersList$: Observable<any>;

  constructor(private store: Store<UserState>) {
    this.usersList$ = store.select(selectUserList);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }
}
