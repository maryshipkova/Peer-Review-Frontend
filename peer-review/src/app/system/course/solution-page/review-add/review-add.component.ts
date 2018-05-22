import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ReviewService} from '../../../shared/services/review.service';
import {SolutionDataService} from '../solution-data.service';
import {SolutionModel} from '../../../../common/models/solution.model';
import {NgForm} from '@angular/forms';
import {ReviewModel} from '../../../../common/models/review.model';
import {TaskDataService} from '../../task/task-data.service';
import {CriteriaModel} from '../../../../common/models/criteria.model';

@Component({
  selector: 'peer-review-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.scss']
})
export class ReviewAddComponent implements OnInit {
  sub: Subscription;
  solutionId: string;
  criteria: CriteriaModel[];

  constructor(private reviewService: ReviewService, private taskDataService: TaskDataService) {

  }

  ngOnInit() {
    this.criteria = this.taskDataService.getTask().CriteriaCollection;
  }

  onSubmit(form: NgForm) {

    // const solution = new ReviewModel(title, description, this.taskId, new Date(), false);
    // this.sub = this.solutionService.createSolution(solution).subscribe(data => console.log(data));
  }
}
