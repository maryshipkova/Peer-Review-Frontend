import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'peer-review-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username = window.localStorage.username;

  constructor() {
  }

  ngOnInit() {
  }

}
