import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {TaskDataService} from '../../task-data.service';
import {CriteriaModel} from '../../../../../common/models/criteria.model';

@Component({
  selector: 'peer-review-criteria-add',
  templateUrl: './criteria-add.component.html',
  styleUrls: ['./criteria-add.component.scss']
})
export class CriteriaAddComponent implements OnInit {
  criteria: CriteriaModel;

  constructor(private taskDataService: TaskDataService) {
  }

  ngOnInit() {
    // const task = this.taskDataService.getTask();
  }

  onSubmit(form: NgForm) {
    // const {title, MaxPoint} = form.value;
    // const criteria = new CriteriaModel(title, description, this.taskId, new Date(), false);
    // this.sub = this.solutionService.createSolution(solution).subscribe(data => console.log(data));
  }
}
