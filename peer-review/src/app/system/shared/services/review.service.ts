import {Injectable} from '@angular/core';
import {Api} from '../../../common/core/api';
import {SolutionModel} from '../../../common/models/solution.model';

import {HttpClient, HttpParams} from '@angular/common/http';
import {ReviewModel} from '../../../common/models/review.model';
import {Observable} from 'rxjs/index';

@Injectable()
export class ReviewService extends Api {

  constructor(public http: HttpClient) {
    super(http);
  }

  createReview(review: ReviewModel): Observable<ReviewModel> {
    return this.post(`Review`, review);
  }

  getReviewById( reviewId: string): Observable<ReviewModel> {
    return this.get(`reviews/${reviewId}`);
  }

  getReviewListBySolution(solutionId: string): Observable<ReviewModel[]> {
    return this.get(`reviews/GetBySolution/${solutionId}`);
  }

}
