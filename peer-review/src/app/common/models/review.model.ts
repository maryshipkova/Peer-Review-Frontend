import {ReviewCriteriaModel} from './review-criteria.model';

export class ReviewModel {
  constructor(
    public AuthorId: string,
    public SolutionId: string,
    public PostTime: Date,
    public RateCollection: ReviewCriteriaModel[],
    public Id?: string
  ) {
  }
}
