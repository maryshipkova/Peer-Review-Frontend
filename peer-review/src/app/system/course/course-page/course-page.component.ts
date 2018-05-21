import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseModel} from '../../../common/models/course.model';
import {CourseService} from '../../shared/services/course.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';

@Component({
  selector: 'peer-review-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  sub: Subscription;
  course: CourseModel;
  navRoutes = [
    {
      'title': 'Course information',
      'route': 'info'
    },
    {
      'title': 'Tasks and rating',
      'route': 'tasks'
    },
    {
      'title': 'Students',
      'route': 'students'
    },
    {
      'title': 'Add task',
      'route': 'add'
    },
    {
      'title': 'Invite user',
      'route': 'invite'
    }
  ];

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.courseService.getCourseById(params['id']).subscribe(data => {
          this.course = data;
          console.log(this.course);
          this.router.navigate(['./course/info'], {relativeTo: this.route});
        });
      }

    });
  }
}
