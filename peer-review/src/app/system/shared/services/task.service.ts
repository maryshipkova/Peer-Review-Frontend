import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Api} from '../../../common/core/api';
import {TaskModel} from '../../../common/models/task.model';

@Injectable()
export class TaskService extends Api {

  constructor(public http: HttpClient) {
    super(http);
  }

  createTask(task: TaskModel)
    : Observable<TaskModel> {
    return this.post(`tasks/Add`, task);
  }

  getTaskById(taskId: string): Observable<TaskModel> {

    return this.get(`tasks/GetById/${taskId}`);
  }

  getTaskListByCourse(courseId: string): Observable<TaskModel[]> {
    return this.get(`tasks/GetByCourse/${courseId}`);
  }
  deleteTask(taskId: string)
    : Observable<TaskModel> {
    return this.delete(`tasks/Delete/${taskId}`);
  }
}
