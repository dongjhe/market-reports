import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Stocks } from './stocks';

describe('Stocks', () => {
  let component: Stocks;
  let fixture: ComponentFixture<Stocks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stocks],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Stocks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
