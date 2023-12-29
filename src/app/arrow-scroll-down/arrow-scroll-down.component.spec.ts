import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowScrollDownComponent } from './arrow-scroll-down.component';

describe('ArrowScrollDownComponent', () => {
  let component: ArrowScrollDownComponent;
  let fixture: ComponentFixture<ArrowScrollDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowScrollDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowScrollDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
