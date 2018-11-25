import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEventsModalComponent } from './all-events-modal.component';

describe('AllEventsModalComponent', () => {
  let component: AllEventsModalComponent;
  let fixture: ComponentFixture<AllEventsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEventsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEventsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
