import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsdataCardComponent } from './carsdata-card.component';

describe('CarsdataCardComponent', () => {
  let component: CarsdataCardComponent;
  let fixture: ComponentFixture<CarsdataCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsdataCardComponent]
    });
    fixture = TestBed.createComponent(CarsdataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
