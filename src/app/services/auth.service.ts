import { Injectable } from '@angular/core';
import { SignUpRequest } from '../models/auth/sign-up-request.interface';
import { SignInRequest } from '../models/auth/sign-in-request.interface';
import { ApiResponse } from '../models/common/api-response.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  // async signUp(SignUpRequest: SignUpRequest): Observable<ApiResponse<void>>{
  //   return this.http.post<ApiResponse<void>>(`${this.apiUrl}/auth/signup`,SignUpRequest);
  // }

  // async signIn(SignInRequest: SignInRequest): Observable<ApiResponse<void>>{
  //   return this.http.post<ApiResponse<void>>(`${this.apiUrl}/auth/signip`,SignInRequest);
  // }
  async signUp(signUpData: SignUpRequest): Promise<ApiResponse<void>> {
    try {
      const response = await fetch(`${this.apiUrl}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData),
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.log(errorText);
        throw new Error(errorText);
      }
      const data = await response.json();
      return await data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async signIn(signInData: SignInRequest): Promise<ApiResponse<void>> {
    try {
      const response = await fetch(`${this.apiUrl}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInData),
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.log(errorText);
        throw new Error(errorText);
      }
      const token = response.headers.get('Authorization');
      if (token) {
        localStorage.setItem('jwtToken', token);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
