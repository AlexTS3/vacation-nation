import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUser: boolean = false;

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    const userCheck = localStorage.length > 0
    this.isUser = userCheck
  }

  // checkUser(){
  //   console.log('test ng init')
  //   const user = localStorage.length > 0;
  //   console.log(user)
  //   if (user) {
  //     console.log(this.isUser)
  //     this.isUser = true;
  //     console.log(this.isUser)
  //   }
  // }

  logout() {
    this.userService.logout();
    this.isUser = false;
    this.router.navigate(['/']);
  }
}
