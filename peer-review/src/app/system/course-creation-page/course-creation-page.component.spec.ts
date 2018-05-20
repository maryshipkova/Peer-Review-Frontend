import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCreationPageComponent } from './course-creation-page.component';

describe('CourseCreationPageComponent', () => {
  let component: CourseCreationPageComponent;
  let fixture: ComponentFixture<CourseCreationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCreationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
