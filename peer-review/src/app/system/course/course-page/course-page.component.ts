import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';


@Component({
  selector: 'peer-review-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  navRoutes = [
    {
      'title': 'Course information',
      'route': 'info'
    },
    {
      'title': 'Tasks',
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

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    // this.router.navigate(['./course/info'], {relativeTo: this.route});
  }
}
