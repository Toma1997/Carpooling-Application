import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRideComponent } from './edit-ride.component';

describe('EditRideComponent', () => {
  let component: EditRideComponent;
  let fixture: ComponentFixture<EditRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
