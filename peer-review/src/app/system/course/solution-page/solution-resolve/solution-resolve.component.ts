import {Component, OnInit} from '@angular/core';
import {CriteriaModel} from '../../../../common/models/criteria.model';
import {TaskDataService} from '../../task/task-data.service';
import {NgForm} from '@angular/forms';
import {SolutionDataService} from '../solution-data.service';
import {SolutionModel} from '../../../../common/models/solution.model';
import {ReviewService} from '../../../shared/services/review.service';
import {SolutionService} from '../../../shared/services/solution.service';
import {ReviewModel} from '../../../../common/models/review.model';
import {ReviewCriteriaModel} from '../../../../common/models/review-criteria.model';
import {TaskModel} from '../../../../common/models/task.model';

@Component({
  selector: 'peer-review-solution-resolve',
  templateUrl: './solution-resolve.component.html',
  styleUrls: ['./solution-resolve.component.scss']
})
export class SolutionResolveComponent implements OnInit {
  criteriaCollection: CriteriaModel[];
  solutionId: string;
  ratingCollection = [];
  isLoaded = false;

  constructor(private taskDataService: TaskDataService, private solutionDataService: SolutionDataService,
              private reviewService: ReviewService, private solutionService: SolutionService) {
  }

  ngOnInit() {
    let rating = [];
    this.criteriaCollection = this.taskDataService.getTask().CriteriaCollection;
    this.solutionId = this.solutionDataService.getSolution().Id;
    this.reviewService.getReviewListBySolution(this.solutionId).subscribe((reviews: ReviewModel[]) =>
      reviews.forEach(review => {
        this.reviewService.getReviewById(review.Id).subscribe(r => {
          rating.push(...r.RateCollection);
        });
        console.log('rating', rating);
        for (const rate in rating) {
          console.log('rate', rate);

          let match = false;
          this.ratingCollection.forEach(avgRate => {
            if (avgRate.CriteriaId === rating[rate].CriteriaId) {
              match = true;
              avgRate.Rating = (avgRate.Rating + rating[rate].Rating) / 2;
            }
          });
          if (!match) this.ratingCollection.push(rating[rate]);
        }
        console.log(this.ratingCollection);
        this.isLoaded = true;

      }));


  }

  onSubmit(form: NgForm) {
    let reviewCriteriaCollection = [];
    this.criteriaCollection.forEach((c, i) => {
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

    this.solutionService.resolveSolution(this.solutionId, review).subscribe(data => console.log(data));
  }
}
