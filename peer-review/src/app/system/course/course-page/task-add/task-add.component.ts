import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/index';
import {TaskService} from '../../../shared/services/task.service';
import {TaskModel} from '../../../../common/models/task.model';
import {CourseModel} from '../../../../common/models/course.model';
import {CourseDataService} from '../course-data.service';
import {CriteriaModel} from '../../../../common/models/criteria.model';

@Component({
  selector: 'peer-review-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit, OnDestroy {
  numbers = [1, 2, 3, 4, 5];
  sub: Subscription;
  courseId: string;

  constructor(private taskService: TaskService, private courseDataCourse: CourseDataService) {

  }

  ngOnInit() {
    this.courseId = this.courseDataCourse.getCourse().Id;
  }

  onSubmit(form: NgForm) {
    const {title, description} = form.value;
    let criterias: CriteriaModel[] = [];
    for (const param in form.value) {
      // console.log(i);
      if (param.includes('criteria') && form.value[param]) {
        const num = param[param.length - 1];
        const maxPoint = form.value[`max-point-${num}`];
        criterias.push(new CriteriaModel(form.value[param], !maxPoint ? 10 : maxPoint));
      }
    }
    const task = new TaskModel(title, description, this.courseId, new Date(), criterias);
    this.sub = this.taskService.createTask(task).subscribe(data => console.log('response', data));

  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
