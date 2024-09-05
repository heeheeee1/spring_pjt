import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  activatedIndex: number | undefined;

  constructor(
    private router: Router
  ) {

  }

  activeIndex(index: number) {
    this.activatedIndex = index;
    this.navigate(index);
  }

  private navigate(index: number) {
    console.log(index);
    if (index === 0) this.router.navigate(['/like-books']);
    else if (index === 1) this.router.navigate(['/search']);
    else if (index === 2) this.router.navigate(['/community']);
    else this.router.navigate(['/my-page']);
  }
}
