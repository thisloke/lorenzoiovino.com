import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCtaComponent } from './button-cta.component';

describe('ButtonCtaComponent', () => {
  let component: ButtonCtaComponent;
  let fixture: ComponentFixture<ButtonCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCtaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
