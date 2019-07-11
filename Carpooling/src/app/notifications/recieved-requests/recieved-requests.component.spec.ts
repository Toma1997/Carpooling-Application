import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedRequestsComponent } from './recieved-requests.component';

describe('RecievedRequestsComponent', () => {
  let component: RecievedRequestsComponent;
  let fixture: ComponentFixture<RecievedRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievedRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
