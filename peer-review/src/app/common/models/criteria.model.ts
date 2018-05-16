export class CriteriaModel {
  constructor(
    public criteriaId: number,
    public taskId: number,
    public title: string,
    public description: string,
    public MaxPoint: number
  ) {
  }
}
