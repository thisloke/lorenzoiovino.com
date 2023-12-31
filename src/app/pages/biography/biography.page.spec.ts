import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographyPage } from './biography.page';

describe('BiographyPage', () => {
  let component: BiographyPage;
  let fixture: ComponentFixture<BiographyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiographyPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiographyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
