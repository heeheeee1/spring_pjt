import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikeBooksPageComponent } from './components/like-books-page/like-books-page.component';


const routes: Routes = [
  { path: '', component: LikeBooksPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LikeBooksRoutingModule { }
