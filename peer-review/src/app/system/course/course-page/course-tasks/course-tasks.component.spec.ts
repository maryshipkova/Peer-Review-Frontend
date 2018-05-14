import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTasksComponent } from './course-tasks.component';

describe('CourseTasksComponent', () => {
  let component: CourseTasksComponent;
  let fixture: ComponentFixture<CourseTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
