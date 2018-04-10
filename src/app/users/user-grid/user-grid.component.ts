import { UserService } from './../../shared/services/user-service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnInit {

  public apiUrl: any[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userService.getList().subscribe((bien: any) => {
      this.apiUrl = bien;
      console.log(this.apiUrl);
    });
  }
  gotoCreate() {

  }
}
