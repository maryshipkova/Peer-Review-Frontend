import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSolutionsComponent } from './task-solutions.component';

describe('TaskSolutionsComponent', () => {
  let component: TaskSolutionsComponent;
  let fixture: ComponentFixture<TaskSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
