import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointLibComponent } from './endpoint-lib.component';

describe('EndpointLibComponent', () => {
  let component: EndpointLibComponent;
  let fixture: ComponentFixture<EndpointLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
