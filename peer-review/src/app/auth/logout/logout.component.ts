import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../common/services/auth.service';

@Component({
  selector: 'peer-review-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.signOut().subscribe(() => {
      window.localStorage.clear();
      this.router.navigate(['/home']);
    });
  }

}
