import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'peer-review-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {
  navRoutes = [
    {
      'title': 'Task information',
      'route': 'info'
    },
    {
      'title': 'Solutions',
      'route': 'solutions'
    },
    {
      'title': 'Add solution',
      'route': 'add-solution'
    }
    // {
    //   'title': 'Add criteria',
    //   'route': 'add-criteria'
    // }
  ];
  constructor() { }

  ngOnInit() {
  }

}
