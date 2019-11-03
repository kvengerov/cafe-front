import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../_services/user/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    // const userId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.userService.getUser(+userId).subscribe(user => this.user = user);
  }

}
