import {Component, OnInit} from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'peer-review-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log( form.value);
  }
}
