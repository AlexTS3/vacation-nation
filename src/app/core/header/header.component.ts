import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/user/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUser$!: Observable<boolean>;


  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    const user = localStorage.getItem('Current-User');
    this.isUser$ = this.userService.isUser();
    // this.user = JSON.parse(localStorage.getItem('Current-User')!);

  }

  logout() {
    this.userService.logout();
    // this.isUser$ = false;
    // this.isUser$ = this.userService.isUser();
    // console.log(`logout ${this.isUser$}`)
    this.router.navigate(['/']);
  }
}
