import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserServiceService, private router: Router) {}

  registerUser(form: NgForm): void {
    const {email, userName, password} = form.value;
    this.userService.register(email, password);
    this.router.navigate(['/']);
  }
}
