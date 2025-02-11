import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: false,
})
export class SigninComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  async onSignIn() {
    const signInData = {
      email: this.email,
      password: this.password,
    };
    console.log('signInData:', signInData);

    try {
      const response = await this.authService.signIn(signInData);
      if (response.success) {
        console.log(response);

        this.router.navigate(['/']);
      } else {
        console.error('Sign Up Error', response.message);
      }
    } catch (error) {}
  }
}
