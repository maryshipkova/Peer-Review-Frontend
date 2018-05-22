import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/index';
import {SolutionService} from '../../../../shared/services/solution.service';
import {TaskDataService} from '../../task-data.service';
import {SolutionModel} from '../../../../../common/models/solution.model';

@Component({
  selector: 'peer-review-solution-add',
  templateUrl: './solution-add.component.html',
  styleUrls: ['./solution-add.component.scss']
})
export class SolutionAddComponent implements OnInit {
  sub: Subscription;
  taskId: string;

  constructor(private solutionService: SolutionService, private taskDataCourse: TaskDataService) {
  }

  ngOnInit() {
    this.taskId = this.taskDataCourse.getTask().Id;
  }

  onSubmit(form: NgForm) {
    const {title, description} = form.value;
    const solution = new SolutionModel(title, description, this.taskId, new Date(), false);
    this.sub = this.solutionService.createSolution(solution).subscribe(data => console.log(data));
  }
}
