import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../store/users/app-state';

import { UserModel } from 'src/app/models/user-model';

import * as fromUsersActions from '../store/users/user.actions';
import * as fromUsersSelector from '../store/users/users.reducer';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss']
})
export class AdminUserListComponent implements OnInit {

  // List 1
  adminUsersList1$: Observable<UserModel[]> = this.store.select(fromUsersSelector.getUsersAdministrator);

  // List 2
  adminUsersList2: UserModel[] = [];

  // List 3
  adminUsersList3: UserModel[] = [];

  // List 4
  adminUsersList4: UserModel[] = [];

  // List 5
  adminUsersList5$: Observable<UserModel[]> = this.store.select(fromUsersSelector.getUsersByProfile, { profile: 'Admin' });

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // List 2
    this.store
      .select(fromUsersSelector.getUsersAdministrator)
      .subscribe((users: UserModel[]) => {
        this.adminUsersList2 = users;
      });

    // List 3
    this.store
      .select(fromUsersSelector.getUsers)
      .subscribe((users: UserModel[]) => {
        this.adminUsersList3 = users.filter((user) => user.profile === 'Admin');
      });

    // List 4
    this.store
      .select(fromUsersSelector.getUsersByProfile, { profile: 'Admin' })
      .subscribe((users: UserModel[]) => {
        this.adminUsersList4 = users;
      });
  }

  edit(id: number): void {
    this.store.dispatch(fromUsersActions.loadUser({ payload: id }));
  }

  remove(id: number): void {
    this.store.dispatch(fromUsersActions.deleteUser({ payload: id }));
  }

}
