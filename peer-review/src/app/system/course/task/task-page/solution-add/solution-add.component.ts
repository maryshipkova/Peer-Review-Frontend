import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'peer-review-solution-add',
  templateUrl: './solution-add.component.html',
  styleUrls: ['./solution-add.component.scss']
})
export class SolutionAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log( form.value);
  }
}
