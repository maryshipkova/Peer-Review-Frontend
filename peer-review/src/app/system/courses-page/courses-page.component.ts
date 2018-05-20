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


  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.sub = this.courseService.getCourseListByUser().subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
