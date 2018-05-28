import {Component, OnDestroy, OnInit} from '@angular/core';
import {SolutionDataService} from '../solution-data.service';
import {ReviewModel} from '../../../../common/models/review.model';
import {Subscription} from 'rxjs/index';
import {ReviewService} from '../../../shared/services/review.service';

@Component({
  selector: 'peer-review-solution-reviews',
  templateUrl: './solution-reviews.component.html',
  styleUrls: ['./solution-reviews.component.scss']
})
export class SolutionReviewsComponent implements OnInit, OnDestroy {

  reviews: ReviewModel[];
  sub: Subscription;
  isLoaded = false;

  constructor(private solutionDataService: SolutionDataService, private reviewService: ReviewService) {
  }

  ngOnInit() {
    const solutionId = this.solutionDataService.getSolution().Id;
    this.sub = this.reviewService.getReviewListBySolution(solutionId).subscribe(data => {
      this.reviews = data;
      this.isLoaded = true;

    });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

}
