import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/index';
import {TaskModel} from '../../../../../common/models/task.model';
import {SolutionModel} from '../../../../../common/models/solution.model';
import {TaskDataService} from '../../task-data.service';
import {SolutionService} from '../../../../shared/services/solution.service';

@Component({
  selector: 'peer-review-task-solutions',
  templateUrl: './task-solutions.component.html',
  styleUrls: ['./task-solutions.component.scss']
})
export class TaskSolutionsComponent implements OnInit {
  task: TaskModel;
  isLoaded = false;
  sub: Subscription;
  solutions: SolutionModel[];

  constructor(private taskDataService: TaskDataService, private solutionService: SolutionService) {

  }

  ngOnInit() {
    this.task = this.taskDataService.getTask();
    this.sub = this.solutionService.getSolutionListByTask(this.task.Id).subscribe(data => {
      this.solutions = data;
      this.isLoaded = true;
    });
  }

}
