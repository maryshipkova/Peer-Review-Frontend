import {Component, OnInit} from '@angular/core';
import {SolutionModel} from '../../../../common/models/solution.model';
import {SolutionDataService} from '../solution-data.service';

@Component({
  selector: 'peer-review-solution-info',
  templateUrl: './solution-info.component.html',
  styleUrls: ['./solution-info.component.scss']
})
export class SolutionInfoComponent implements OnInit {
  solution: SolutionModel;
  username=window.localStorage.username;
  constructor(private solutionDataService: SolutionDataService) {
  }

  ngOnInit() {
    this.solution = this.solutionDataService.getSolution();
  }

}
