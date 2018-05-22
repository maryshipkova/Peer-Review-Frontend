import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskService} from '../../shared/services/task.service';
import {TaskDataService} from './task-data.service';
import {Subscription} from 'rxjs/Subscription';
import {TaskModel} from '../../../common/models/task.model';

@Component({
  selector: 'peer-review-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task: TaskModel;
  sub: Subscription;
  isLoaded = false;
  constructor(private route: ActivatedRoute, private router: Router,
              private taskService: TaskService, private taskDataService: TaskDataService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if ( !this.task && params['taskid']) { // if route is active
        this.taskService.getTaskById(params['taskid']).subscribe(data => {
  // console.log(data);
          this.task = data;
          this.taskDataService.setTask(data);
          this.router.navigate(['./task/info'], {relativeTo: this.route});
          this.isLoaded = true;
        });
      }

    });
  }

}
