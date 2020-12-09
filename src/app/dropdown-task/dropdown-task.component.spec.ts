import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTaskComponent } from './dropdown-task.component';

describe('DropdownTaskComponent', () => {
  let component: DropdownTaskComponent;
  let fixture: ComponentFixture<DropdownTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
