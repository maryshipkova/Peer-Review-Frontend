
export class ReviewModel {
  constructor(
    public reviewId: number,
    public authorId: number,
    public solutionId: number,
    public posted: Date,
  ) {
  }
}
