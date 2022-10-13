import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user-model';
import { UserService } from '../repositories/user-service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: UserModel[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: UserModel[]) => this.userList = users);
  }

}
