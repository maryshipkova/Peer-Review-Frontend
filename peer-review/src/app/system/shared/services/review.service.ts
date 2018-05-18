import { Injectable } from '@angular/core';
import {Api} from '../../../common/core/api';
import {SolutionModel} from '../../../common/models/solution.model';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {ReviewModel} from '../../../common/models/review.model';

@Injectable()
export class ReviewService extends Api {

  constructor(public http: HttpClient) {
    super(http);
  }

  createReview(token: string, review: ReviewModel): Observable<ReviewModel> {
    return this.post('url', [token, review]);
  }

  getReviewById(token: string, reviewId: number): Observable<ReviewModel> {
    return this.get('url');
  }

  getReviewListBySolution(token: string, solutionId: number, userId: number): Observable<ReviewModel[]> {
    return this.get(`tasks/GetBySolution/${solutionId}?TokenData=${token}&UserId=${userId}`);
  }

}
