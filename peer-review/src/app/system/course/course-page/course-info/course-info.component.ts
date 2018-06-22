import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseDataService} from '../course-data.service';
import {CourseModel} from '../../../../common/models/course.model';
import {UserService} from '../../../../common/services/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'peer-review-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit, OnDestroy {
  course: CourseModel;
  mentorName: string;
  sub: Subscription;

  constructor(private courseDataService: CourseDataService, private userService: UserService) {

  }

  ngOnInit() {
    this.course = this.courseDataService.getCourse();
    this.sub = this.userService.getUserById(this.course.Mentor.Id).subscribe(user => {
      console.log(user);
      this.mentorName = user.Login;
    });
    console.log(this.course.Mentor.Id);
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

}
