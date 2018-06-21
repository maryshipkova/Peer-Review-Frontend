import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CourseDataService} from '../course-data.service';
import {CourseModel} from '../../../../common/models/course.model';
import {UserService} from '../../../../common/services/user.service';
import {CourseService} from '../../../shared/services/course.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'peer-review-course-invite',
  templateUrl: './course-invite.component.html',
  styleUrls: ['./course-invite.component.scss']
})
export class CourseInviteComponent implements OnInit, OnDestroy {
  courseId: string;
  sub: Subscription;

  constructor(private courseDataCourse: CourseDataService, private courseService: CourseService) {
    this.courseId = this.courseDataCourse.getCourse().Id;
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.courseService.inviteUser(form.value.username, this.courseId).subscribe(data => {
      console.log('user ', form.value.username, ' was invited');
    });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

}
