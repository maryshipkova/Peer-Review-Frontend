import {Component, OnDestroy, OnInit} from '@angular/core';

import {CourseService} from '../shared/services/course.service';
import {CourseDataService} from './course-page/course-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseModel} from '../../common/models/course.model';
import {Subscription} from 'rxjs/index';
import {UserService} from '../../common/services/user.service';

@Component({
  selector: 'peer-review-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, OnDestroy {
  course: CourseModel;
  sub1: Subscription;
  isLoaded = false;
  userStatus: string;
  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router,
              private courseDataService: CourseDataService, private userService: UserService) {

  }

  ngOnInit() {
    this.sub1 = this.route.params.subscribe(params => {
      if (!this.course && params['courseid']) { // if route is active
        this.courseService.getCourseById(params['courseid']).subscribe(data => {
          this.course = data;
          this.courseDataService.setCourse(data);
          this.userStatus = this.courseDataService.getUserStatus();
          this.router.navigate(['./course/info'], {relativeTo: this.route});
          this.isLoaded = true;
        });
      }
    });
  }

  onDelete() {
    this.courseService.deleteCourse(this.course.Id).subscribe(() => {
      // this.courseDataService.clear();
      this.router.navigate(['/system/courses']);
    });
  }

  ngOnDestroy(): void {
    if (this.sub1) this.sub1.unsubscribe();
  }
}
