import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeFormComponent } from './view-employee-form.component';

describe('ViewEmployeeFormComponent', () => {
  let component: ViewEmployeeFormComponent;
  let fixture: ComponentFixture<ViewEmployeeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmployeeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
