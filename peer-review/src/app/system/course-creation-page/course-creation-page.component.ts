import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {CourseService} from '../shared/services/course.service';
import {UserService} from '../../common/services/user.service';
import 'rxjs/add/operator/combineLatest';
import {UserModel} from '../../common/models/user.model';
import {CourseModel} from '../../common/models/course.model';

@Component({
  selector: 'peer-review-course-creation-page',
  templateUrl: './course-creation-page.component.html',
  styleUrls: ['./course-creation-page.component.scss']
})
export class CourseCreationPageComponent implements OnInit, OnDestroy {
  sub: Subscription;

  constructor(private courseService: CourseService, private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const {title, description} = form.value;
    this.sub = this.userService.getUserById().subscribe((user: UserModel) => {
      // console.log(user);
      const course = new CourseModel(title, description, user);

      this.courseService.createCourse(course).subscribe(data => {
        console.log(data);
      });
    });

    //   Observable.combineLatest(
    // this.userService.getUserById(),
    //
    // )
    //     .subscribe((data: [Bill, any]) => {
    //
    // });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
