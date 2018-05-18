import {Injectable} from '@angular/core';
import {Api} from '../../../common/core/api';
import {Observable} from 'rxjs/Observable';
import {TaskModel} from '../../../common/models/task.model';
import {HttpClient} from '@angular/common/http';
import {SolutionModel} from '../../../common/models/solution.model';

@Injectable()
export class SolutionService extends Api {

  constructor(public http: HttpClient) {
    super(http);
  }

  createSolution(token: string, solution: SolutionModel): Observable<SolutionModel> {
    return this.post('url', [token, solution]);
  }

  getSolutionById(token: string, solutionId: number): Observable<SolutionModel> {
    return this.get('url');
  }

  getSolutionListByTask(token: string, taskId: number, userId: number): Observable<SolutionModel[]> {
    return this.get(`tasks/GetByTask/${taskId}?TokenData=${token}&UserId=${userId}`);
  }

}
