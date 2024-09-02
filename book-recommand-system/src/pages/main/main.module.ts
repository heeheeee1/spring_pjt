import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainRoutingModule } from './main-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RecommandComponent } from './components/recommand/recommand.component';


@NgModule({
  declarations: [
    MainPageComponent,
    NavBarComponent,
    RecommandComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
