import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ReviewService} from '../../../shared/services/review.service';
import {SolutionDataService} from '../solution-data.service';
import {SolutionModel} from '../../../../common/models/solution.model';
import {NgForm} from '@angular/forms';
import {ReviewModel} from '../../../../common/models/review.model';

@Component({
  selector: 'peer-review-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.scss']
})
export class ReviewAddComponent implements OnInit {
  sub: Subscription;
  solutionId: string;

  constructor(private reviewService: ReviewService, private solutionDataService: SolutionDataService) {
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const {title, description} = form.value;
    // const solution = new ReviewModel(title, description, this.taskId, new Date(), false);
    // this.sub = this.solutionService.createSolution(solution).subscribe(data => console.log(data));
  }
}
