import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../shared/services/course.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'peer-review-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {

  constructor(private courseService: CourseService, private route: ActivatedRoute) {

  }
  ngOnInit() {
  }

}
