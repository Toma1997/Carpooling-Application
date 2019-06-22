import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestRideComponent } from './request-ride.component';

describe('RequestRideComponent', () => {
  let component: RequestRideComponent;
  let fixture: ComponentFixture<RequestRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
