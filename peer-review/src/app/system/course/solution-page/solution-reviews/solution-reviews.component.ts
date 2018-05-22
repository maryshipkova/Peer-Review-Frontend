import {Component, OnInit} from '@angular/core';
import {SolutionModel} from '../../../../common/models/solution.model';
import {SolutionDataService} from '../solution-data.service';
import {ReviewModel} from '../../../../common/models/review.model';

@Component({
  selector: 'peer-review-solution-reviews',
  templateUrl: './solution-reviews.component.html',
  styleUrls: ['./solution-reviews.component.scss']
})
export class SolutionReviewsComponent implements OnInit {
  solution: SolutionModel;
  reviews: ReviewModel[];


  constructor(private solutionDataService: SolutionDataService) {
  }

  ngOnInit() {
    this.solution = this.solutionDataService.getSolution();
  }

}
