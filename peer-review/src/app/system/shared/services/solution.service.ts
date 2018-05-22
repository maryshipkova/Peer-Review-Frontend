import {Injectable} from '@angular/core';
import {Api} from '../../../common/core/api';
import {Observable} from 'rxjs/Observable';
import {TaskModel} from '../../../common/models/task.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {SolutionModel} from '../../../common/models/solution.model';

@Injectable()
export class SolutionService extends Api {

  constructor(public http: HttpClient) {
    super(http);
  }

  createSolution(solution: SolutionModel): Observable<SolutionModel> {
    this.params = new HttpParams({
        fromObject: JSON.parse(JSON.stringify(solution))
      }
    );

    return this.post(`Solution`, this.params);
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
