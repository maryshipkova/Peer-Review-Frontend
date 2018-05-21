import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {CourseService} from '../shared/services/course.service';
import {CourseDataService} from './course-page/course-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseModel} from '../../common/models/course.model';

@Component({
  selector: 'peer-review-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  course: CourseModel;
  sub: Subscription;
  isLoaded = false;

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router,
              private courseDataService: CourseDataService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) { // if route is active
        this.courseService.getCourseById(params['id']).subscribe(data => {
          this.course = data;
          this.courseDataService.setCourse(data);
          this.router.navigate(['./course/info'], {relativeTo: this.route});
          this.isLoaded = true;
        });
      }

    });
  }
}
