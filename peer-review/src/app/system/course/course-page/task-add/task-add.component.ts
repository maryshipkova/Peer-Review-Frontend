import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {TaskService} from '../../../shared/services/task.service';
import {TaskModel} from '../../../../common/models/task.model';
import {CourseModel} from '../../../../common/models/course.model';
import {CourseDataService} from '../course-data.service';

@Component({
  selector: 'peer-review-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit, OnDestroy {
  sub: Subscription;
  courseId: string;

  constructor(private taskService: TaskService, private courseDataCourse: CourseDataService) {

  }

  ngOnInit() {
    this.courseId = this.courseDataCourse.getCourse().Id;
  }

  onSubmit(form: NgForm) {
    const {title, description} = form.value;
    const task = new TaskModel(title, description, this.courseId, new Date());
    this.sub = this.taskService.createTask(task).subscribe(data => console.log(data));

  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
