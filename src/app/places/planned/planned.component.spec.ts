import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedComponent } from './planned.component';

describe('PlannedComponent', () => {
  let component: PlannedComponent;
  let fixture: ComponentFixture<PlannedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlannedComponent]
    });
    fixture = TestBed.createComponent(PlannedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
