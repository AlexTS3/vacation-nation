import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private userService: UserServiceService,
    private router: Router,
  ) {}

  login(form: NgForm): void {
    const { userName, password } = form.value;
    this.userService.login(userName, password);
    this.router.navigate(['/']);
  }
}
