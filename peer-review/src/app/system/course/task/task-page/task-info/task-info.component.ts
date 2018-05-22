import {Component, OnInit} from '@angular/core';
import {TaskModel} from '../../../../../common/models/task.model';
import {TaskDataService} from '../../task-data.service';
import {SolutionModel} from '../../../../../common/models/solution.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'peer-review-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss']
})
export class TaskInfoComponent implements OnInit {
  task: TaskModel;

  constructor(private taskDataService: TaskDataService) {
  }

  ngOnInit() {
    this.task = this.taskDataService.getTask();
  }

}
