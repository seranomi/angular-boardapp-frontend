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
      console.log('signUpdata: ',signUpData)
      const response = await fetch(`${this.apiUrl}/users`, {
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
      return data;

    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async signIn(signInData: SignInRequest): Promise<ApiResponse<void>> {
    try {
      console.log('signIndata: ',signInData)
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

      // API 서버의 응답 헤더에서 JWT 토큰을 추출출
      const token = response.headers.get('Authorization');
      console.log(token);
      if (token) {
        localStorage.setItem('jwtToken', token);
      }// 헤더에서 추출한 토큰을 클라이언트 localStorage에 저장

      const data = await response.json();
      return data;

    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
