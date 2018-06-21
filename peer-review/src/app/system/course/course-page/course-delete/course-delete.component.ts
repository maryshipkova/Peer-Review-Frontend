import {Component,  OnInit} from '@angular/core';
import {CourseDataService} from '../course-data.service';
import {CourseService} from '../../../shared/services/course.service';
import {Router} from '@angular/router';

@Component({
  selector: 'peer-review-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.scss']
})
export class CourseDeleteComponent implements OnInit {

  constructor(private courseService: CourseService, private courseDataService: CourseDataService, private router:Router) {

  }

  ngOnInit() {
    const course = this.courseDataService.getCourse();
    if (this.courseDataService.getUserStatus() === 'M') {
      this.courseService.deleteCourse(course.Id).subscribe(data => {
        //this.courseDataService.clear();
        console.log('course deleted', data);
        this.router.navigate(['/system/courses']);
      });
    }
  }


}
