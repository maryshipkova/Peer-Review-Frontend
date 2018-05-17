import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInviteComponent } from './course-invite.component';

describe('CourseInviteComponent', () => {
  let component: CourseInviteComponent;
  let fixture: ComponentFixture<CourseInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
