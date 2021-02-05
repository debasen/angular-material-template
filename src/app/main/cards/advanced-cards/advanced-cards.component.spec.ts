import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCardsComponent } from './advanced-cards.component';

describe('AdvancedCardsComponent', () => {
  let component: AdvancedCardsComponent;
  let fixture: ComponentFixture<AdvancedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
