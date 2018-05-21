import {CriteriaModel} from './criteria.model';

export class TaskModel {
  constructor(
    public title: string,
    public description: string,
    public courseId: string,
    public posted: Date,
    public TaskId?: string,
    public CriteriaCollection?: CriteriaModel[]
  ) {
  }
}
