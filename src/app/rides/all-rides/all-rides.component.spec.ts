import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRidesComponent } from './all-rides.component';

describe('AllRidesComponent', () => {
  let component: AllRidesComponent;
  let fixture: ComponentFixture<AllRidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
