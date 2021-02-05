import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterIconComponent } from './letter-icon.component';

describe('LetterIconComponent', () => {
  let component: LetterIconComponent;
  let fixture: ComponentFixture<LetterIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
