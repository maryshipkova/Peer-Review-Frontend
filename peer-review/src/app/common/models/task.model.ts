import {CriteriaModel} from './criteria.model';

export class TaskModel {
  constructor(
    public Title: string,
    public Description: string,
    public CourseId: string,
    public Posted: Date,
    public CriteriaCollection: CriteriaModel[],
    public Id?: string
  ) {
  }
}
