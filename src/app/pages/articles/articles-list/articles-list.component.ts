import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../../../services/articles.service';
import { Router } from '@angular/router';
import { ArticleResponse } from 'src/app/models/articles/article-response.interface';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
  standalone: false,
})
export class ArticlesListComponent implements OnInit {
  articles: ArticleResponse[] = [];

  constructor(
    private articlesService: ArticlesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.articlesService.getAllArticles().subscribe({
      next: response => {
        if (response.success) {
          this.articles = response.data;
        } else {
          console.error(response.message);
        }
      },
      error: err => {
        console.error('Error fetching articles:', err);
      },
      complete: () => {
        console.log('Fetching articles request completed.');
      }
    });
  }

  viewArticle(id: number) {
    // 상세 페이지로 이동 (예: article-detail 페이지로 이동)
    this.router.navigate([`/articles/${id}/detail`]);
  }
}
