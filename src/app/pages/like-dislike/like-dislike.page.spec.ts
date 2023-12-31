import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeDislikePage } from './like-dislike.page';

describe('LikeDislikeComponent', () => {
  let component: LikeDislikePage;
  let fixture: ComponentFixture<LikeDislikePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeDislikePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeDislikePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
