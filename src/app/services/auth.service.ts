import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignUpRequest } from '../models/auth/sign-up-request.interface';
import { SignInRequest } from '../models/auth/sign-in-request.interface';
import { ApiResponse } from '../models/common/api-response.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }
  signUp(signUpRequest: SignUpRequest): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.apiUrl}/users`, signUpRequest);
  }
  signIn(signInRequest: SignInRequest): Observable<ApiResponse<void>> {
    return new Observable<ApiResponse<void>>(observer => {
      this.http.post<ApiResponse<void>>(`${this.apiUrl}/auth/signin`, signInRequest, { observe: 'response' })
        .subscribe(response => {
          this.saveJwtToken(response); // JWT 토큰 저장 로직 호출
          const apiResponse = this.createApiResponse(response);
          observer.next(apiResponse); // ApiResponse 반환
          observer.complete();
        }, error => {
          const apiResponse: ApiResponse<void> = {
            success: false,
            statusCode: 500,
            message: '서버 오류',
            data: undefined
          };
          observer.error(apiResponse); // 에러 반환
        });
    });
  }
  private saveJwtToken(response: any) {
    const token = response.headers.get('Authorization');
    if (token) {
      localStorage.setItem('jwtToken', token); // JWT 토큰 저장
    }
  }
  private createApiResponse(response: any): ApiResponse<void> {
    return {
      success: response.ok,
      statusCode: response.status,
      message: response.ok ? '로그인 성공' : '로그인 실패',
      data: undefined // 데이터는 없음
    };
  }
}