import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioItemCardComponent } from './portfolio-item-card.component';

describe('PortfolioCardComponent', () => {
  let component: PortfolioItemCardComponent;
  let fixture: ComponentFixture<PortfolioItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioItemCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
