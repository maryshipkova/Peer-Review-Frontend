import {Component, OnInit} from '@angular/core';
import {CourseDataService} from '../course-data.service';
import {CourseModel} from '../../../../common/models/course.model';

@Component({
  selector: 'peer-review-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {
  course: CourseModel;

  constructor(private courseDataService: CourseDataService) {

  }

  ngOnInit() {
    this.course = this.courseDataService.getCourse();
  }

}
