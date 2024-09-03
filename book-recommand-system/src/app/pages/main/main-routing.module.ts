import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'like-books',
    loadChildren: () => import('../like-books/like-books.module').then(m => m.LikeBooksModule)
  },
  {
    path: 'community',
    loadChildren: () => import('../community/community.module').then(m => m.CommunityModule)
  },
  {
    path: 'my-page',
    loadChildren: () => import('../my-page/my-page.module').then(m => m.MyPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('../search/search.module').then(m => m.SearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
