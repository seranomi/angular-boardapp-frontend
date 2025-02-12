import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/common/api-response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArticleResponse } from '../models/articles/article-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private apiUrl = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) { }

  // getAllArticles(): Observable<ApiResponse<ArticleResponse[]>> {
  //   const token = localStorage.getItem('jwtToken');
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': token ? token : ''// JWT 토큰을 헤더에 포함
  //   });

  //   return this.http.get<ApiResponse<ArticleResponse[]>>(`${this.apiUrl}`, { headers });
  // }
  getAllArticles(): Observable<ApiResponse<ArticleResponse[]>> {
    const token = localStorage.getItem('jwtToken'); // 로컬스토리지에서 JWT 토큰 가져오기
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : '' // JWT 토큰을 헤더에 포함
    });

    return this.http.get<ApiResponse<ArticleResponse[]>>(`${this.apiUrl}`, { headers });
  }
  

  getArticleById(id: number): Observable<ApiResponse<ArticleResponse>> {
    const token = localStorage.getItem('jwtToken'); // 로컬스토리지에서 JWT 토큰 가져오기
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : '' // JWT 토큰을 헤더에 포함
    });

    return this.http.get<ApiResponse<ArticleResponse>>(`${this.apiUrl}/${id}/detail`, { headers });
  }

  
}
