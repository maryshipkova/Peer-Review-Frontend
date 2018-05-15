import { Component, OnInit } from '@angular/core';

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
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
