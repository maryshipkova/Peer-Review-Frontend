import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'peer-review-solution-page',
  templateUrl: './solution-page.component.html',
  styleUrls: ['./solution-page.component.scss']
})
export class SolutionPageComponent implements OnInit {
  navRoutes = [
    {
      'title': 'Solution information',
      'route': 'info'
    },
    {
      'title': 'Reviews',
      'route': 'reviews'
    },
    {
      'title': 'Add review',
      'route': 'add'
    }
    ];
  constructor() { }

  ngOnInit() {
  }

}
