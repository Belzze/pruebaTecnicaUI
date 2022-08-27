import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherboxComponent } from './weatherbox.component';

describe('WeatherboxComponent', () => {
  let component: WeatherboxComponent;
  let fixture: ComponentFixture<WeatherboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
