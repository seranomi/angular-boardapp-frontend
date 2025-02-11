import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: false,
})
export class SigninComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit() {}

  async onSignIn() {
    const signInData = {
      email: this.email,
      password: this.password,
    };
    console.log('signInData:', signInData);

    try {
      const response = await this.authService.signIn(signInData);
      if (response) {
        console.log(response);
        this.router.navigate(['/']);
      } else {
        console.error('Sign In Error');
      }
    } catch (error) {
      console.log('Sign In Error', error);
    }
  }
}
