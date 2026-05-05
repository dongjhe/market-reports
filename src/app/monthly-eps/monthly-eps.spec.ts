import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { MonthlyEps } from './monthly-eps';

describe('MonthlyEps', () => {
  let component: MonthlyEps;
  let fixture: ComponentFixture<MonthlyEps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyEps],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MonthlyEps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
