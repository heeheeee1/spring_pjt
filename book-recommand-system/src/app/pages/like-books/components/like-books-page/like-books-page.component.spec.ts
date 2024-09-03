import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeBooksPageComponent } from './like-books-page.component';

describe('LikeBooksPageComponent', () => {
  let component: LikeBooksPageComponent;
  let fixture: ComponentFixture<LikeBooksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeBooksPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeBooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
