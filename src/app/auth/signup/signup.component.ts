import { Component, OnInit } from '@angular/core';
import { UserRole } from 'src/app/common/user-role.enum';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: false
})
export class SignupComponent  implements OnInit {
  email: string = '';
  username: string = '';
  password: string = '';
  passwordConfirm: string = '';
  role: UserRole = UserRole.USER;

  constructor() { 
    
  }

  ngOnInit() {
    
  }

  onSignUp() {
    const signUpData = {
      email: this.email,
      username: this.username,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
      role: this.role,
    }
    console.log('signUpData:', signUpData);
  }

}
