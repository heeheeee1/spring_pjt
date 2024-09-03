import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeBooksRoutingModule } from './like-books-routing.module';
import { LikeBooksPageComponent } from './components/like-books-page/like-books-page.component';



@NgModule({
  declarations: [
    LikeBooksPageComponent
  ],
  imports: [
    CommonModule,
    LikeBooksRoutingModule
  ]
})
export class LikeBooksModule { }
