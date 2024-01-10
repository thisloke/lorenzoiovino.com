import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiPhotoComponent } from './ascii-photo.component';

describe('AsciiPhotoComponent', () => {
  let component: AsciiPhotoComponent;
  let fixture: ComponentFixture<AsciiPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsciiPhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsciiPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
