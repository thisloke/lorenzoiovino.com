import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMePage } from './contact-me.page';

describe('ContactMeComponent', () => {
  let component: ContactMePage;
  let fixture: ComponentFixture<ContactMePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactMePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
