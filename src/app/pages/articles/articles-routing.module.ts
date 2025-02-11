import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ArticlesListComponent,
  },
  {
    path: ':id/detail',
    component: ArticleDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
