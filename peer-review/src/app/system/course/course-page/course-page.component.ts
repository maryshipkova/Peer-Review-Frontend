import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {CourseDataService} from './course-data.service';


@Component({
  selector: 'peer-review-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  userStatus: string;
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

  ];

  mentorRoutes = [
    {
      'title': 'Add task',
      'route': 'add'
    },
    {
      'title': 'Invite user',
      'route': 'invite'
    },
    {
      'title': 'Delete course',
      'route': 'delete'
    }
  ];

  constructor(private route: ActivatedRoute, private courseDataService: CourseDataService) {

  }

  ngOnInit() {
    this.userStatus = this.courseDataService.getUserStatus();

    if (this.userStatus === 'M') {
      this.navRoutes.push(...this.mentorRoutes);
    }
    // this.router.navigate(['./course/info'], {relativeTo: this.route});
  }
}
