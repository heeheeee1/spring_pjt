import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainRoutingModule } from './main-routing.module';
import { RecommandComponent } from './components/recommand/recommand.component';
import { NavBarModule } from '../../modules/nav-bar/nav-bar.module';


@NgModule({
  declarations: [
    MainPageComponent,
    RecommandComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NavBarModule
  ]
})
export class MainModule { }
