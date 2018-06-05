import {Injectable} from '@angular/core';
import {CourseModel} from '../../../common/models/course.model';

@Injectable()
export class CourseDataService {
  private course: CourseModel;

  constructor() {
  }

  setCourse(course: CourseModel) {
    this.course = course;
  }

  getCourse() {
    return this.course;
  }

  clear() {
    this.course = undefined;
  }

  getUserStatus(): string {
    return (this.course.Mentor.Id === window.localStorage.userId) ? 'M' : 'S';
  }
}
