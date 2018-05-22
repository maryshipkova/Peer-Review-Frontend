import {Injectable} from '@angular/core';
import {Api} from '../../../common/core/api';
import {Observable} from 'rxjs/index';
import {TaskModel} from '../../../common/models/task.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SolutionModel} from '../../../common/models/solution.model';

@Injectable()
export class SolutionService extends Api {

  constructor(public http: HttpClient) {
    super(http);
  }

  createSolution(solution: SolutionModel): Observable<SolutionModel> {


    return this.post(`Solution`, solution);
  }

  getSolutionById(solutionId: string): Observable<SolutionModel> {
    return this.get(`solutions/${solutionId}`);
  }

  getSolutionListByTask(taskId: string): Observable<SolutionModel[]> {
    return this.get(`solutions/GetByTask/${taskId}`);
  }

  resolveSolution(solutionId: string): Observable<SolutionModel> {
    return this.post(`solutions/Resolve-solution/${solutionId}`);
  }
}
