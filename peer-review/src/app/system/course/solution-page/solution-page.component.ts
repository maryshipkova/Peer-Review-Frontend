import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/index';
import {ActivatedRoute, Router} from '@angular/router';
import {SolutionService} from '../../shared/services/solution.service';
import {SolutionDataService} from './solution-data.service';
import {SolutionModel} from '../../../common/models/solution.model';

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
    },
    {
      'title': 'Resolve solution',
      'route': 'resolve'
    }
  ];
  solution: SolutionModel;
  sub: Subscription;
  isLoaded = false;

  constructor(private route: ActivatedRoute, private router: Router,
              private solutionService: SolutionService, private solutionDataService: SolutionDataService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (!this.solution && params['solutionid']) { // if route is active
        this.solutionService.getSolutionById(params['solutionid']).subscribe(data => {
          this.solution = data;
          this.solutionDataService.setSolution(data);
          this.router.navigate(['./info'], {relativeTo: this.route});
          this.isLoaded = true;
        });
      }

    });
  }

}
