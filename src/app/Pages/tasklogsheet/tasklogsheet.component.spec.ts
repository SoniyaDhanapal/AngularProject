import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklogsheetComponent } from './tasklogsheet.component';

describe('TasklogsheetComponent', () => {
  let component: TasklogsheetComponent;
  let fixture: ComponentFixture<TasklogsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklogsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklogsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
