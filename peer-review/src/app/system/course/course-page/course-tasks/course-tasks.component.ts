import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/index';
import {TaskService} from '../../../shared/services/task.service';
import {TaskModel} from '../../../../common/models/task.model';
import {CourseModel} from '../../../../common/models/course.model';
import {CourseDataService} from '../course-data.service';

@Component({
  selector: 'peer-review-task-list',
  templateUrl: './course-tasks.component.html',
  styleUrls: ['./course-tasks.component.scss']
})
export class CourseTasksComponent implements OnInit, OnDestroy {
  course: CourseModel;
  isLoaded = false;
  sub: Subscription;
  tasks = []; // : TaskModel[];


  constructor(private taskService: TaskService, private courseDataService: CourseDataService) {
  }

  ngOnInit() {
    this.course = this.courseDataService.getCourse();
    this.sub = this.taskService.getTaskListByCourse(this.course.Id)
      .subscribe((data) => {
          this.tasks = data;
          this.isLoaded = true;
        }
      );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
