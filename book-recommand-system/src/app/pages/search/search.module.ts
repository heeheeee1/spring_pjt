import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { NavBarModule } from 'src/app/modules/nav-bar/nav-bar.module';



@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NavBarModule
  ]
})
export class SearchModule { }
