export class CriteriaModel {
  constructor(
    public Title: string,
    public MaxPoint: number,
    public Description = null,
    public TaskId?: string,
    public Id?: string,
  ) {
  }
}
