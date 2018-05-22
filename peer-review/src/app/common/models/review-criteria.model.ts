export class ReviewCriteriaModel {
  constructor(
    public Description: string,
    public Rating: number,
    public CriteriaId: string,
    public ReviewId?: string,
  ) {
  }
}
