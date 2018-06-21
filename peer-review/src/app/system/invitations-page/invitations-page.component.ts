import {Component, OnInit} from '@angular/core';
import {CourseModel} from '../../common/models/course.model';
import {CourseService} from '../shared/services/course.service';

@Component({
  selector: 'peer-review-invitations-page',
  templateUrl: './invitations-page.component.html',
  styleUrls: ['./invitations-page.component.scss']
})
export class InvitationsPageComponent implements OnInit {
  invites: CourseModel[];
  isLoaded = false;

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
    this.courseService.getInvitesByUser().subscribe(data => {
      this.invites = data;
      this.isLoaded = true;
    });
  }

}
