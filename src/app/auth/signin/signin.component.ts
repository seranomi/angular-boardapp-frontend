import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: false
})
export class SigninComponent  implements OnInit {
  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {}

  onSignIn() {
    const signInData = {
      email: this.email,
      password: this.password,
    }
    console.log('signInData:', signInData);
  }

}
