import { Injectable } from '@angular/core';
import { SignUpRequest } from '../common/sign-up-request.interface';
import { ApiResponse } from '../common/api-response.interface';
import { SignInRequest } from '../common/sign-in-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api'
  constructor() { }

  async signUp(signUpData: SignUpRequest): Promise<ApiResponse<void>>{
    try {
      
      const response = await fetch(`${this.apiUrl}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData)});
      if (!response.ok){
        const errorText = await response.text();
        console.log(errorText);
        throw new Error(errorText)
      }
      const data = await response.json();
      return await data;
    } catch (error) {
      console.error(error);
      throw error
    }
  }
  async signIn(signInData: SignInRequest): Promise<ApiResponse<void>>{
    try {
      
      const response = await fetch(`${this.apiUrl}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInData)});
      if (!response.ok){
        const errorText = await response.text();
        console.log(errorText);
        throw new Error(errorText)
      }
      const token = response.headers.get('Authorization');
      if (token){
        localStorage.setItem('jwtToken',token);
      }
      const data = await response.json();
      return await data;
    } catch (error) {
      console.error(error);
      throw error
    }
  }
}
