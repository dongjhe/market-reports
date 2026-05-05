import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { MorningNews } from './morning-news';

describe('MorningNews', () => {
  let component: MorningNews;
  let fixture: ComponentFixture<MorningNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorningNews],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MorningNews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
