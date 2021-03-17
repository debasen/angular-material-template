import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedButtonsComponent } from './advanced-buttons.component';

describe('AdvancedButtonsComponent', () => {
  let component: AdvancedButtonsComponent;
  let fixture: ComponentFixture<AdvancedButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
