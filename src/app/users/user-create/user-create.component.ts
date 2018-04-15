import { USERS } from './../../mock-users';
import { UserGridComponent } from './../user-grid/user-grid.component';
import { Component, OnInit, Input } from '@angular/core';
import { User } from './../../user';
import { UserService } from './../../shared/services/user-service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user: User;
  users: User[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private userService: UserService, private location: Location) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  add(): void {
    this.userService.addUser(this.user).subscribe(user => { this.users.push(user); });
  }
}
