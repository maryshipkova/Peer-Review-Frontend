import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Api} from '../../../common/core/api';
import {TaskModel} from '../../../common/models/task.model';

@Injectable()
export class TaskService extends Api {

  constructor(public http: HttpClient) {
    super(http);
  }

  createTask(token: string, task: TaskModel): Observable<TaskModel> {
    return this.post('url', [token, task]);
  }

  getTaskById(token: string, taskId: number): Observable<TaskModel> {
    return this.get('url');
  }

  getTaskListByCourse(token: string, courseId: number, userId: number): Observable<TaskModel[]> {
    return this.get(`tasks/GetByCourse/${courseId}?TokenData=${token}&UserId=${userId}`);
  }

}
