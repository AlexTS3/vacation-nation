import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  constructor(
    private userService: UserServiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  login(): void {
    if(this.form.invalid){
      return
    }
    const { email, password } = this.form.value;
    this.userService.login(email, password);
    this.router.navigate(['/']);
  }
}
