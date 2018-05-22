import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Api} from '../../../common/core/api';
import {TaskModel} from '../../../common/models/task.model';

@Injectable()
export class TaskService extends Api {

  constructor(public http: HttpClient) {
    super(http);
  }

  createTask(task: TaskModel)
    : Observable<TaskModel> {
    this.params = new HttpParams({
        fromObject: JSON.parse(JSON.stringify(task))
      }
    );
    // console.log('params', this.params.toString());
    console.log('json', task);
    return this.post(`tasks/Add`, this.params);
  }

  getTaskById(taskId: string): Observable<TaskModel> {
    console.log(taskId);
    return this.get(`tasks/GetById/${taskId}`);
  }

  getTaskListByCourse(courseId: string): Observable<TaskModel[]> {
    return this.get(`tasks/GetByCourse/${courseId}`);
  }

}
