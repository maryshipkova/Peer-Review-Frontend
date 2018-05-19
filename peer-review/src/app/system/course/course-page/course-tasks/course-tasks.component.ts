import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {TaskService} from '../../../shared/services/task.service';
import {TaskModel} from '../../../../common/models/task.model';

@Component({
  selector: 'peer-review-task-list',
  templateUrl: './course-tasks.component.html',
  styleUrls: ['./course-tasks.component.scss']
})
export class CourseTasksComponent implements OnInit, OnDestroy {
  isLoaded = false;
  sub: Subscription;
  tasks = []; // : TaskModel[];


  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.sub = this.taskService.getTaskListByCourse('meow', 1, '2')
      .subscribe(() => {
          this.tasks = [
            {
              'title': 'Meow',
              'id': 1234
            },
            {
              'title': 'qwerty',
              'id': 1235
            },
          ];
          console.log(this.tasks);
          this.isLoaded = true;
        }
      );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
