import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/common/article-response.interface';
import { ArticlesService } from '../articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
  standalone: false,
})
export class ArticlesListComponent implements OnInit {
  articles: Article[] = [];

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) {}

  async ngOnInit() {
    try {
      const response = await this.articlesService.getAllArticles();
      if (response.success) {
        this.articles = response.data;
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error('Fetch error', error);
    }
  }

  viewArticle(id: number) {
    // 상세 페이지로 이동 (예: article-detail 페이지로 이동)
    this.router.navigate([`detail/${id}`]);
  }
}
