import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperWithErrorComponent } from './stepper-with-error.component';

describe('StepperWithErrorComponent', () => {
  let component: StepperWithErrorComponent;
  let fixture: ComponentFixture<StepperWithErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperWithErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperWithErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
