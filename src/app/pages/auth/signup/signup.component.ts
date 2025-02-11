import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserRole } from 'src/app/models/auth/user-role.enum';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: false,
})
export class SignupComponent implements OnInit {
  email: string = '';
  username: string = '';
  password: string = '';
  passwordConfirm: string = '';
  role: UserRole = UserRole.USER;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  async onSignUp() {
    const signUpData = {
      email: this.email,
      username: this.username,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
      role: this.role,
    };
    console.log('signUpData:', signUpData);
    try {
      const response = await this.authService.signUp(signUpData);
      if (response.success) {
        console.log(response);
        this.router.navigate(['auth']);
      } else {
        console.error('Sign Up Error', response.message);
      }
    } catch (error) {}
  }
}
