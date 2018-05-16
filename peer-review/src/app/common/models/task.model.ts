
export class TaskModel {
  constructor(
    public taskId: number,
    public courseId: number,
    public title: string,
    public description: string,
    public posted: Date
  ) {
  }
}
