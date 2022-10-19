import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user-model';
import { UsersService } from '../repositories/user-service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent {

  user: UserModel = { id: 0, name: "", age: 0, profile: "Admin" }

  constructor(private userService: UsersService) { }

  addUser() {
    if(this.user.id === 0) {
      this.userService.addUser(this.user).subscribe();
    } else {
      alert("else");
    }
  }

}
