import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/index';
import {ReviewService} from '../../../shared/services/review.service';
import {SolutionDataService} from '../solution-data.service';
import {NgForm} from '@angular/forms';
import {ReviewModel} from '../../../../common/models/review.model';
import {CriteriaModel} from '../../../../common/models/criteria.model';
import {ReviewCriteriaModel} from '../../../../common/models/review-criteria.model';
import {TaskDataService} from '../../task/task-data.service';

@Component({
  selector: 'peer-review-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.scss']
})
export class ReviewAddComponent implements OnInit {
  sub: Subscription;
  solutionId: string;
  criteria: CriteriaModel[];

  constructor(private reviewService: ReviewService, private solutionDataService: SolutionDataService,
              private taskDataService: TaskDataService
  ) {

  }

  ngOnInit() {
    this.criteria = this.taskDataService.getTask().CriteriaCollection;
    this.solutionId = this.solutionDataService.getSolution().Id;
  }

  onSubmit(form: NgForm) {
    let reviewCriteriaCollection = [];
    this.criteria.forEach((c, i) => {
        const points = form.value['point-' + i];
        const reviewCriteria = new ReviewCriteriaModel(c.Title, points ? points : c.MaxPoint, c.Id);
        reviewCriteriaCollection.push(reviewCriteria);
      }
    );
    const review = new ReviewModel(
      window.localStorage.userId,
      this.solutionId,
      new Date(),
      reviewCriteriaCollection
    );

    this.sub = this.reviewService.createReview(review).subscribe(data => console.log(data));
  }
}
