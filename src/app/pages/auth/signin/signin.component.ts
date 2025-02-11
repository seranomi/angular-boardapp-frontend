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

    this.authService.signIn(signInData).subscribe({
      next: response => {
        if (response.success) {
          this.router.navigate(['/']);
        } else {
          console.error('Sign In failed:', response.message);
        }
      },
      error: err => {
        console.error('Sign In error:', err);
      },
      complete: () => {
        console.log('Sign In request completed.');
      }
    });
  }
}
