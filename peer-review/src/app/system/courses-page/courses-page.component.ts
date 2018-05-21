import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {CourseService} from '../shared/services/course.service';

@Component({
  selector: 'peer-review-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  sub: Subscription;
  courses = [];

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.sub = this.courseService.getCourseListByUser().subscribe(data => {
      this.courses = data;
      console.log(this.courses);
    });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

}
