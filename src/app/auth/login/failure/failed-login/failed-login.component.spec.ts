import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedLoginComponent } from './failed-login.component';

describe('FailedLoginComponent', () => {
  let component: FailedLoginComponent;
  let fixture: ComponentFixture<FailedLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
