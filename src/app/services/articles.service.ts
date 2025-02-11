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
  
  async getAllArticles(): Promise<ApiResponse<ArticleResponse[]>> {
    try {
      const response = await fetch(`${this.apiUrl}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: ApiResponse<ArticleResponse[]> = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error', error);
      throw error;
    }
  }

  async getArticleById(id: number): Promise<ApiResponse<ArticleResponse>> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}/detail`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: ApiResponse<ArticleResponse> = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error', error);
      throw error;
    }
  }
}
