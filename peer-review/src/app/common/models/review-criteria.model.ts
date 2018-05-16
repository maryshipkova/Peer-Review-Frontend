
export class ReviewCriteriaModel {
  constructor(
    public reviewId: number,
    public criteriaId: number,
    public rating: number,
    public description: string
  ) {
  }
}
