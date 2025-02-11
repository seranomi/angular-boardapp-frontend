import { Injectable } from '@angular/core';
import { SignUpRequest } from '../common/sign-up-request.interface';
import { ApiResponse } from '../common/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'
  constructor() { }

  async signUp(signUpData: SignUpRequest): Promise<ApiResponse<void>>{
    try {
      
      const response = await fetch(`${this.apiUrl}/signup`, {
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
}
