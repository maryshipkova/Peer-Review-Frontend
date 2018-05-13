import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'peer-review-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    // this.router.navigate(['/home']);
  }

}
