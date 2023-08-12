import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordsValidator } from 'src/app/shared/validators/passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private userService: UserServiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    passwordsGroup: this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [passwordsValidator('password', 'rePassword')],
      }
    ),
  });

  registerUser(): void {
    const {
      email,
      passwordsGroup: { password },
    } = this.form.value;
    this.userService.register(email, password);
    this.router.navigate(['/']);
  }
}
