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
  ratingCollection: ReviewCriteriaModel[] = [];
  isLoaded = false;

  constructor(private taskDataService: TaskDataService, private solutionDataService: SolutionDataService,
              private reviewService: ReviewService, private solutionService: SolutionService) {
  }

  ngOnInit() {
    let rating: ReviewCriteriaModel[] = [];
    this.criteriaCollection = this.taskDataService.getTask().CriteriaCollection;
    this.solutionId = this.solutionDataService.getSolution().Id;
    this.reviewService.getReviewListBySolution(this.solutionId).subscribe((reviews: ReviewModel[]) =>
      reviews.forEach(review => {
        this.reviewService.getReviewById(review.Id).subscribe(r => {
          // console.log(r);
          // rating.push(...r.RateCollection);
          r.RateCollection.forEach((rate: ReviewCriteriaModel) => {
            console.log('rate', rate);
            if (!this.ratingCollection.length) {
              this.ratingCollection.push(rate);
            }
            else {
              let match = false;
              this.ratingCollection.forEach(reviewItem => {
                console.log('item', reviewItem);
                if (reviewItem.CriteriaId === rate.CriteriaId) {
                  match = true;
                  reviewItem.Rating = (reviewItem.Rating + rate.Rating) / 2;
                }
              });
              if (!match) this.ratingCollection.push(rate);
            }
          });
          console.log('collection', this.ratingCollection);
          this.isLoaded = true;
        });


      }));


  }

  onSubmit(form: NgForm) {
    this.ratingCollection.forEach((ratingItem, i) => {
        if (form.value['criteria-' + i])
          ratingItem.Rating = form.value['criteria-' + i];
      }
    );
    const review = new ReviewModel(
      window.localStorage.userId,
      this.solutionId,
      new Date(),
      this.ratingCollection
    );
    this.solutionService.resolveSolution(this.solutionId, review).subscribe(data => console.log(data));
  }
}
