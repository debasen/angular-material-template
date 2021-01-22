import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSuccessComponent } from './mat-success.component';

describe('MatSuccessComponent', () => {
  let component: MatSuccessComponent;
  let fixture: ComponentFixture<MatSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
