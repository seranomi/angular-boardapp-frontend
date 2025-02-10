import { Injectable } from '@angular/core';
import { ApiResponse } from '../common/api-response.interface';
import { Article } from '../common/article-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiUrl = 'http://localhost:3000/api/articles'

  async getAllArticles(): Promise<ApiResponse<Article[]>> {
    try {
      const response = await fetch(`${this.apiUrl}`);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: ApiResponse<Article[]> = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error', error);
      throw error;
    }
  }
  
  async getArticleById(id: number): Promise<ApiResponse<Article>> {
    try {
      const response = await fetch(`${this.apiUrl}/${id}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: ApiResponse<Article> = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error', error);
      throw error;
    }
  }
}
