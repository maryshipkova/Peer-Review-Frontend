import {Injectable} from '@angular/core';
import {Api} from '../../../common/core/api';
import {SolutionModel} from '../../../common/models/solution.model';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ReviewModel} from '../../../common/models/review.model';

@Injectable()
export class ReviewService extends Api {

  constructor(public http: HttpClient) {
    super(http);
  }

  createReview(review: ReviewModel): Observable<ReviewModel> {
    this.params = new HttpParams({
      fromObject: JSON.parse(JSON.stringify(review))
    });
    return this.post(`Review`);
  }

  getReviewById(token: string, reviewId: number): Observable<ReviewModel> {
    return this.get(`reviews/${reviewId}`);
  }

  getReviewListBySolution(solutionId: string): Observable<ReviewModel[]> {
    return this.get(`reviews/GetBySolution/${solutionId}`);
  }

}
