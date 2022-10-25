import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user-model';
import { UsersService } from '../repositories/user-service';

import { Store } from '@ngrx/store';
import { AppState } from './../store/users/app-state';
import * as fromUsersActions from '../store/users/user.actions';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {

  user: UserModel = { id: 0, name: "", age: 0, profile: "Admin" }

  constructor(
    private store: Store<AppState>,
    private userService: UsersService) { }

  addUser() {
    if(this.user.id === 0) {
      this.userService.addUser(this.user).subscribe();
      this.store.dispatch(fromUsersActions.createUser({ payload: this.user }));
      this.user = { id: 0, name: "", age: 0, profile: "" };
    } else {
      this.store.dispatch(fromUsersActions.updateUser({ payload: this.user }));
      this.user = { id: 0, name: "", age: 0, profile: "" };
    }
  }

}
