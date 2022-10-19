import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user-model';
import { UsersService } from '../repositories/user-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: UserModel[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: UserModel[]) => this.userList = users);
  }

}
