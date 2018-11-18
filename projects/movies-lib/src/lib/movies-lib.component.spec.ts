import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesLibComponent } from './movies-lib.component';

describe('MoviesLibComponent', () => {
  let component: MoviesLibComponent;
  let fixture: ComponentFixture<MoviesLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
