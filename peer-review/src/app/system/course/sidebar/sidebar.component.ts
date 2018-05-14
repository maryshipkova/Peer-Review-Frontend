import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'peer-review-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() navRoutes = [];
  constructor() { }

  ngOnInit() {

  }

}
