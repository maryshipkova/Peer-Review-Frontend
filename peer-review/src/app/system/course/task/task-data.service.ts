import {Injectable} from '@angular/core';
import {TaskModel} from '../../../common/models/task.model';


@Injectable()
export class TaskDataService {
  private task: TaskModel;

  constructor() {
  }

  setTask(task: TaskModel) {
    this.task = task;
  }

  getTask() {
    return this.task;
  }

}
