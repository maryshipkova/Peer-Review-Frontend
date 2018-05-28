import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/index';
import {ReviewModel} from '../../../../common/models/review.model';
import {ReviewService} from '../../../shared/services/review.service';

@Component({
  selector: 'peer-review-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit {
  review: ReviewModel;
  sub: Subscription;
  isLoaded = false;

  constructor(private route: ActivatedRoute,
              private reviewService: ReviewService) {
  }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params.reviewid);
      if (params.reviewid) {
        this.reviewService.getReviewById(params.reviewid).subscribe(data => {

          this.review = data;
          this.isLoaded = true;
        });
      }
    });
  }
}
