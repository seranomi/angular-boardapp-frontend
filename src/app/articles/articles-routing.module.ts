import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesListPage } from './articles-list/articles-list.page';
import { ArticleDetailPage } from './article-detail/article-detail.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ArticlesListPage
  },
  {
    path: 'detail/:id',
    component: ArticleDetailPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesPageRoutingModule {}
