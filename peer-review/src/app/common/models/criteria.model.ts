export class CriteriaModel {
  constructor(
    public Title: string,
    public Description: string,
    public MaxPoint: number,
    public TaskId: string,
    public CriteriaId?: string,
  ) {
  }
}
