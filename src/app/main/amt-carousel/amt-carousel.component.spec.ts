import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmtCarouselComponent } from './amt-carousel.component';

describe('AmtCarouselComponent', () => {
  let component: AmtCarouselComponent;
  let fixture: ComponentFixture<AmtCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmtCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmtCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
