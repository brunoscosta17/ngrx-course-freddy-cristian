import { AppState } from './../store/users/app-state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { Store } from '@ngrx/store';
import * as fromUsersActions from '../store/users/user.actions';
import * as fromUsersSelector from '../store/users/users.reducer';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  usersList$: Observable<UserModel[]> = this.store.select(fromUsersSelector.getUsers);

  user$: Observable<UserModel | null> = this.store.select(fromUsersSelector.getUser);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromUsersActions.loadUsers());
  }

  edit(id: number): void {
    this.store.dispatch(fromUsersActions.loadUser({ payload: id }));
  }

  remove(id: number): void {
    this.store.dispatch(fromUsersActions.deleteUser({ payload: id }));
  }

}
