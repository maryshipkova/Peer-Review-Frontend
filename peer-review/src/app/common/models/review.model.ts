import {CriteriaModel} from './criteria.model';

export class ReviewModel {
  constructor(
    public Id: number,
    public AuthorId: number,
    public SolutionId: number,
    public PostTime: Date,
    public RateCollection: CriteriaModel[]
  ) {
  }
}
