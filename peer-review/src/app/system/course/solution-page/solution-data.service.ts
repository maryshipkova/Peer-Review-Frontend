import {Injectable} from '@angular/core';
import {SolutionModel} from '../../../common/models/solution.model';


@Injectable()
export class SolutionDataService {
  private solution: SolutionModel;

  constructor() {
  }

  setSolution(solution: SolutionModel) {
    this.solution = solution;
  }

  getSolution() {
    return this.solution;
  }

}
