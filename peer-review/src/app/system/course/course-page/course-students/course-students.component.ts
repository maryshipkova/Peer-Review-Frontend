import {Component, OnInit} from '@angular/core';
import {CourseModel} from '../../../../common/models/course.model';
import {CourseDataService} from '../course-data.service';

@Component({
  selector: 'peer-review-course-students',
  templateUrl: './course-students.component.html',
  styleUrls: ['./course-students.component.scss']
})
export class CourseStudentsComponent implements OnInit {
  course: CourseModel;

  constructor(private courseDataService: CourseDataService) {
  }

  ngOnInit() {
    this.course = this.courseDataService.getCourse();
    console.log(this.course);
  }
}
