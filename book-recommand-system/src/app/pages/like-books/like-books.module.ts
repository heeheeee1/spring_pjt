import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeBooksRoutingModule } from './like-books-routing.module';
import { LikeBooksPageComponent } from './components/like-books-page/like-books-page.component';
import { NavBarModule } from 'src/app/modules/nav-bar/nav-bar.module';



@NgModule({
  declarations: [
    LikeBooksPageComponent
  ],
  imports: [
    CommonModule,
    LikeBooksRoutingModule,
    NavBarModule
  ]
})
export class LikeBooksModule { }
