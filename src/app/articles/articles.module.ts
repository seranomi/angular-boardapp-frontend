import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlesPageRoutingModule } from './articles-routing.module';
import { ArticlesListPage } from './articles-list/articles-list.page';
import { ArticleDetailPage } from './article-detail/article-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlesPageRoutingModule
  ],
  declarations: [
    ArticlesListPage, 
    ArticleDetailPage,
  ]
})
export class ArticlesModule {}
