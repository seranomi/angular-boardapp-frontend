import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/common/article-response.interface';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  standalone: false
})
export class ArticleDetailComponent implements OnInit {
  article: Article | undefined;

  constructor(
    private articlesService: ArticlesService,
    private activatedRouter: ActivatedRoute
  ) { }

  async ngOnInit() {
    await this.loadArticle();
  }

  async loadArticle(){
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    if(id) {
      try {
        const response = await this.articlesService.getArticleById(+id);
        this.article = response.data;
      } catch (error) {
        console.error('Fetch error');
      }
    }
  }

}
